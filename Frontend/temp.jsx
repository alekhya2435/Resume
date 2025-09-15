import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Calculator() {
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Enter") {
        handleEquals();
      } else if (e.key === "Backspace") {
        setExpr((s) => s.slice(0, -1));
      } else if (/[0-9+\-*/().%]/.test(e.key)) {
        setExpr((s) => s + e.key);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  function safeEvaluate(input) {
    const allowed = /^[0-9+\-*/().%\s]+$/;
    if (!allowed.test(input)) throw new Error("Invalid characters");
    const converted = input.replace(/(\d+(?:\.\d+)?)%/g, "($1/100)");
    // eslint-disable-next-line no-new-func
    const fn = new Function(`return (${converted})`);
    const value = fn();
    if (!isFinite(value)) throw new Error("Result not finite");
    return value;
  }

  function handleButton(val) {
    setExpr((s) => s + val);
    inputRef.current?.focus();
  }

  function handleClear() {
    setExpr("");
    setResult(null);
  }

  function handleEquals() {
    try {
      const value = safeEvaluate(expr || "0");
      setResult(value);
    } catch (err) {
      setResult(err.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-6">
      <div className="w-full max-w-sm bg-white/5 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/10">
        <h1 className="text-white text-xl font-semibold mb-4">Calculator</h1>

        <div className="bg-white/10 rounded-lg p-3 mb-4">
          <input
            ref={inputRef}
            value={expr}
            onChange={(e) => setExpr(e.target.value)}
            placeholder="0"
            className="w-full bg-transparent outline-none text-right text-3xl text-white font-mono"
          />
          <div className="text-right text-white/80 mt-2 text-lg">
            {result === null ? "" : typeof result === "number" ? result : `Error: ${result}`}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"]].map((btn, idx) => (
            <motion.button
              key={idx}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                if (btn === "=") handleEquals();
                else handleButton(btn);
              }}
              className="py-3 rounded-xl text-lg font-medium focus:outline-none bg-white/10 text-white"
            >
              {btn}
            </motion.button>
          ))}
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleClear}
            className="col-span-4 py-3 rounded-xl text-lg font-medium focus:outline-none bg-red-500 text-white"
          >
            Clear
          </motion.button>
        </div>
      </div>
    </div>
  );
}
