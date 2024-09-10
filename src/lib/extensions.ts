const languages = [
  {
    language: "APL",
    extensions: ["apl", "dyalog"],
  },
  {
    language: "C",
    extensions: ["c", "h"],
  },
  {
    language: "C++",
    extensions: ["cpp", "cc", "cxx", "c++", "h", "hh", "hpp", "hxx", "h++"],
  },
  {
    language: "C#",
    extensions: ["cs"],
  },
  {
    language: "Clojure",
    extensions: ["clj", "cljc", "cljs", "cljx"],
  },
  {
    language: "Common Lisp",
    extensions: ["lisp", "lsp"],
  },
  {
    language: "Dart",
    extensions: ["dart"],
  },
  {
    language: "Delphi",
    extensions: ["pas", "dpr"],
  },
  {
    language: "Elixir",
    extensions: ["ex", "exs"],
  },
  {
    language: "Elm",
    extensions: ["elm"],
  },
  {
    language: "Erlang",
    extensions: ["erl", "hrl"],
  },
  {
    language: "F#",
    extensions: ["fs", "fsi", "fsx", "fsscript"],
  },
  {
    language: "Fortran",
    extensions: ["f", "for", "f77", "f90", "f95", "f03", "f08"],
  },
  {
    language: "Go",
    extensions: ["go"],
  },
  {
    language: "Groovy",
    extensions: ["groovy", "grt", "gtpl", "gvy"],
  },
  {
    language: "Haskell",
    extensions: ["hs", "lhs"],
  },
  {
    language: "Java",
    extensions: ["java"],
  },
  {
    language: "JavaScript",
    extensions: ["js", "mjs"],
  },
  {
    language: "Julia",
    extensions: ["jl"],
  },
  {
    language: "Kotlin",
    extensions: ["kt", "kts"],
  },
  {
    language: "Lua",
    extensions: ["lua"],
  },
  {
    language: "MATLAB",
    extensions: ["m"],
  },
  {
    language: "Nim",
    extensions: ["nim", "nimble"],
  },
  {
    language: "Objective-C",
    extensions: ["m", "mm"],
  },
  {
    language: "Pascal",
    extensions: ["pas"],
  },
  {
    language: "Perl",
    extensions: ["pl", "pm", "t", "pod"],
  },
  {
    language: "PHP",
    extensions: ["php", "php3", "php4", "php5", "phtml"],
  },
  {
    language: "Python",
    extensions: ["py", "pyw", "pyc", "pyo"],
  },
  {
    language: "R",
    extensions: ["r", "rd", "rda", "rds", "rdb", "rdata", "rt", "R"],
  },
  {
    language: "Ruby",
    extensions: [
      "rb",
      "rbw",
      "gem",
      "rake",
      "gemspec",
      "rbx",
      "rjs",
      "rxml",
      "rhtml",
      "builder",
      "ru",
      "erb",
    ],
  },
  {
    language: "Rust",
    extensions: ["rs"],
  },
  {
    language: "Scala",
    extensions: ["scala"],
  },
  {
    language: "Scheme",
    extensions: ["scm", "ss"],
  },
  {
    language: "Swift",
    extensions: ["swift"],
  },
  {
    language: "TypeScript",
    extensions: ["ts", "tsx"],
  },
];

export const all_extensions: string[] = languages.flatMap(
  (lang) => lang.extensions,
);
