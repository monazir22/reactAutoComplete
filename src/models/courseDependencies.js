export const courseDependencies = [
  { courseCode: "BSC 2010C", prereqs: [] },
  { courseCode: "BSC 2011C", prereqs: [["BSC 2010C"]] },
  { courseCode: "CHM 2045C", prereqs: [] },
  { courseCode: "CHM 2046", prereqs: [["CHM 2045C"]] },
  {
    courseCode: "PHY 3101",
    prereqs: [["MAC 2313"], ["PHY 2049C", "PHY 2054"]]
  },
  {
    courseCode: "COP 4520",
    prereqs: [["COP 3402"], ["COP 3503C"], ["COT 3960"]]
  },
  {
    courseCode: "COP 4600",
    prereqs: [["COP 3402"], ["COP 3503C"], ["COT 3960"]]
  },
  { courseCode: "COP 4710", prereqs: [["COP 3503C"]] },
  { courseCode: "EEL 4768", prereqs: [["EEL 3801C", "CDA 3103C"]] },
  { courseCode: "CAP 4053", prereqs: [["COP 3502C"]] },
  { courseCode: "CAP 4453", prereqs: [["COP 3503C"], ["MAC 2312"]] },
  { courseCode: "CAP 4630", prereqs: [["COP 3503C"], ["COT 3960"]] },
  {
    courseCode: "CAP 4720",
    prereqs: [["COP 3503C"], ["MAC 1114C"], ["COT 3960"]]
  },
  { courseCode: "COT 4500", prereqs: [["MAC 2312"], ["COP 3223C"]] },
  {
    courseCode: "CIS 4615",
    prereqs: [
      ["COP 4600", "CGS 3763"],
      ["CIS 3360", "CIS 3362"]
    ]
  },
  { courseCode: "COP 4020", prereqs: [["COP 3503C"], ["COT 3960"]] },
  {
    courseCode: "COP 4520",
    prereqs: [["COP 3402"], ["COP 3503C"], ["COT 3960"]]
  },
  { courseCode: "COP 4710", prereqs: [["COP 3503C"]] },
  {
    courseCode: "CIS 3362",
    prereqs: [["COP 3223C", "EGN 3211"], ["MAC 1114C"]]
  },
  {
    courseCode: "CIS 4203C",
    prereqs: [
      ["COP 4600", "CGS 3763"],
      ["CIS 3360", "CIS 3362"]
    ]
  },
  {
    courseCode: "CIS 4361",
    prereqs: [["CIS 3360"]],
    coreqs: [["COP 4600", "CGS 3763", "EEL 4882"]]
  },
  {
    courseCode: "CIS 4615",
    prereqs: [
      ["COP 4600", "CGS 3763"],
      ["CIS 3360", "CIS 3362"]
    ]
  },
  { courseCode: "CIS 4940C", prereqs: [["CIS 3360"]] },
  {
    courseCode: "CNT 4403",
    prereqs: [
      ["CNT 3004", "EEL 4781", "CNT 4704"],
      ["CIS 3360", "CIS 3362"]
    ]
  },
  { courseCode: "EEE 4346C", prereqs: [["EEL 3801C"]] },
  {
    courseCode: "CAP 4145",
    prereqs: [["CIS 3360"], ["CGS 3269", "CDA 3103C"], ["CGS 3763", "COP 4600"]]
  },
  { courseCode: "CNT 4425C", prereqs: [["COP 4600", "CGS 3763"]] },
  {
    courseCode: "EGN 4060C",
    prereqs: [
      ["COP 3223C", "EGN 3211"],
      ["EEL 3657", "EEL 4742C", "COP 3503C", "EGN 3321"]
    ]
  },
  { courseCode: "EEL 4660", prereqs: [["EGN 3321", "EEL 4742C", "COP 3503C"]] },
  {
    courseCode: "CNT 4704",
    prereqs: [["COT 3100C", "MAD 2104"], ["STA 2023"]]
  },
  { courseCode: "EEL 4781", prereqs: [["EEL 3801C"], ["STA 3032"]] },
  { courseCode: "MAC 2313", prereqs: [["MAC 2312"]] },
  { courseCode: "MAP 2302", prereqs: [["MAC 2313"]] },
  { courseCode: "MAS 3105", prereqs: [["MAC 2312"]] },
  { courseCode: "MAS 3106", prereqs: [["MHF 3302"], ["MAS 3105"]] }
];

// COP 4520 - Concepts of Parallel and Distributed Processing Credit Hours: 3
// COP 4600 - Operating Systems Credit Hours: 3
// COP 4710 - Database Systems Credit Hours: 3
// EEL 4768 - Computer Architecture Credit Hours: 3

// export const courseDependencies = [
//   { courseCode: "BSC 2010C", prereqs: [] },
//   { courseCode: "BSC 2011C", prereqs: [["BSC 2010C"]] },
//   { courseCode: "CHM 2045C", prereqs: [] },
//   { courseCode: "CHM 2046", prereqs: [["CHM 2045C"]] },
//   { courseCode: "PHY 3101", prereqs: [["MAC 2313"], ["PHY 2049C", "PHY 2054"]] }
// ];
