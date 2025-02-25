const units = {
  length: {
    m: {
      name: "meter",
      pluralName: "meters",
      value: 1,
    },
    mm: {
      name: "millimeter",
      pluralName: "millimeters",
      value: 0.001,
    },
    cm: {
      name: "centimeter",
      pluralName: "centimeters",
      value: 0.01,
    },
    km: {
      name: "kilometer",
      pluralName: "kilometers",
      value: 1000,
    },
    in: {
      name: "inch",
      pluralName: "inches",
      value: 0.0254,
    },
    ft: {
      name: "foot",
      pluralName: "feet",
      value: 0.3048,
    },
    yd: {
      name: "yard",
      pluralName: "yards",
      value: 0.9144,
    },
    mi: {
      name: "mile",
      pluralName: "miles",
      value: 1609.344
    },
  },
  area: {
    m2: {
      name: "square meter",
      pluralName: "square meters",
      value: 1,
    },
    mm2: {
      name: "square millimeter",
      pluralName: "square millimeters",
      value: 1e-6,
    },
    cm2: {
      name: "square centimeter",
      pluralName: "square centimeters",
      value: 1e-4,
    },
    km2: {
      name: "square kilometer",
      pluralName: "square kilometers",
      value: 1e6,
    },
    in2: {
      name: "square inch",
      pluralName: "square inches",
      value: 0.00064516,
    },
    ft2: {
      name: "square foot",
      pluralName: "square feet",
      value: 0.09290304,
    },
    yd2: {
      name: "square yard",
      pluralName: "square yards",
      value: 0.83612736,
    },
    mi2: {
      name: "square mile",
      pluralName: "square miles",
      value: 2589988.110336
    },
  },
  volume: {
    m3: {
      name: "cubic meter",
      pluralName: "cubic meters",
      value: 1,
    },
    mm3: {
      name: "cubic millimeter",
      pluralName: "cubic millimeters",
      value: 1e-9,
    },
    cm3: {
      name: "cubic centimeter",
      pluralName: "cubic centimeters",
      value: 1e-6,
    },
    km3: {
      name: "cubic kilometer",
      pluralName: "cubic kilometers",
      value: 1e-9,
    },
    in3: {
      name: "cubic inch",
      pluralName: "cubic inches",
      value: 0.000016387064,
    },
    ft3: {
      name: "cubic foot",
      pluralName: "cubic feet",
      value: 0.028316846592,
    },
    yd3: {
      name: "cubic yard",
      pluralName: "cubic yards",
      value: 0.764554857984,
    },
    mi3: {
      name: "cubic mile",
      pluralName: "cubic miles",
      value: 4168181825.44058,
    },
  },
  weight: {
    g: {
      name: "gram",
      pluralName: "grams",
      value: 1,
    },
    mg: {
      name: "milligram",
      pluralName: "milligrams",
      value: 0.001,
    },
    kg: {
      name: "kilogram",
      pluralName: "kilograms",
      value: 1000,
    },
    ton: {
      name: "ton",
      pluralName: "tons",
      value: 1000000,
    },
    oz: {
      name: "ounce",
      pluralName: "ounces",
      value: 28.3495,
    },
    lb: {
      name: "pound",
      pluralName: "pounds",
      value: 453.592,
    },
  },
  time: {
    s: {
      name: "second",
      pluralName: "seconds",
      value: 1,
    },
    ms: {
      name: "millisecond",
      pluralName: "milliseconds",
      value: 0.001,
    },
    m: {
      name: "minute",
      pluralName: "minutes",
      value: 60,
    },
    h: {
      name: "hour",
      pluralName: "hours",
      value: 3600,
    },
    d: {
      name: "day",
      pluralName: "days",
      value: 86400,
    },
    w: {
      name: "week",
      pluralName: "weeks",
      value: 604800,
    },
  },
  temperature: {
    K: {
      name: "kelvin",
      pluralName: "kelvin",
      value: 1,
    },
    C: {
      name: "celsius",
      pluralName: "celsius",
      value: 1,
      zero: 273.15,
    },
    F: {
      name: "fahrenheit",
      pluralName: "fahrenheit",
      value: 5/9,
      zero: 255.37,
    },
  },
}

export default units;