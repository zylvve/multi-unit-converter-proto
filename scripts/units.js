const units = {
  length: {
    m: {
      name: "meter",
      pluralName: "meters",
      value: 1,
    },
    km: {
      name: "kilometer",
      pluralName: "kilometers",
      value: 1000,
    },
    ft: {
      name: "foot",
      pluralName: "feet",
      value: 0.3048,
    },
    mi: {
      name: "mile",
      pluralName: "miles",
      value: 1609.344
    },
  },
  time: {
    s: {
      name: "second",
      pluralName: "seconds",
      value: 1,
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
    ms: {
      name: "millisecond",
      pluralName: "milliseconds",
      value: 0.001,
    },
  }
}

export default units;