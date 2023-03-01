import React, { useState, useRef, useEffect } from "react";
import { useFormikContext } from "formik";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function createData(courseCode, courseName, creditHours) {
  return { courseCode, courseName, creditHours };
}
const data = [
  createData("MAC 2311C", "Calculus with Analytic Geometry I", 4),
  createData("MAC 2312", "Calculus with Analytic Geometry II", 4),
  createData("MAC 2313", "Calculus with Analytic Geometry III", 4),
  createData("BSC 2010C", "Biology I", 4),
  createData("BSC 2011C", "Biology II", 4),
  createData("STA 2023", "Statistical Methods I", 3),
  createData("PHY 2048C", "General Physics Using Calculus I", 4),
  createData("ENC 1101", "Composition I", 3),
  createData("ENC 1102", "Composition II", 3),
  createData("CHM 2045C", "Chemistry Fundamentals I", 4),
  createData("CHM 2046", "Chemistry Fundamentals II", 3),
  createData("COP 3330", "Object Oriented Programming", 3),
  createData("COP 3502C", "Computer Science I", 3),
  createData("COP 3503C", "Computer Science II", 3),
  createData("CDA 3103C", "Computer Logic and Organization", 3),
  createData("COT 3100C", "Introduction to Discrete Structures", 3)
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  toolbar: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(0)
  },
  title: {
    flex: "1 1 60%"
  },
  container: {
    // maxHeight: 350,
    height: 350,
    overflowY: "auto"
  },
  table: {
    // display: "block",
    minWidth: "100%"
  },
  tableBody: {
    overflowY: "scroll",
    height: 350
    // display: "block",
  },
  headerCell: {
    fontWeight: "bold"
    // height: 33
  },
  asterikText: {
    margin: theme.spacing(2)
  }
}));

// function emptyRowsLeft(totalEmptyRows) {
//   if (totalEmptyRows === 6) {
//     return 5;
//   }
//   return totalEmptyRows;
// }

function getRows(rows, searchText) {
  if (searchText === "") {
    return rows;
  }

  const filteredRows = getFilteredRows(rows, searchText.toLowerCase());

  return filteredRows;
}

function getFilteredRows(rows, lowerCaseSearchText) {
  return rows.filter((r) => {
    return (
      r.courseCode.toLowerCase().includes(lowerCaseSearchText) ||
      r.courseName.toLowerCase().includes(lowerCaseSearchText)
    );
  });
}

export default function CourseHistoryStep(props) {
  const { setFieldValue, values } = useFormikContext();

  // const [selected, setSelected] = useState([]);

  const [coursesToRender, setCoursesToRender] = useState(data);

  const [searchText, setSearchText] = useState("");
  const [emptyRows, setEmptyRows] = useState(0);
  const classes = useStyles();
  const courses = data;

  const searchRef = useRef();

  const handleSearchSubmit = (event) => {
    searchRef.current.blur();
    event.stopPropagation();
    event.preventDefault();
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const filteredRows = getRows(data, searchText);

    if (filteredRows.length <= 6) {
      setEmptyRows(6 - filteredRows.length);
    } else {
      setEmptyRows(0);
    }

    setCoursesToRender(filteredRows);
  }, [searchText]);

  // useEffect(() => {}, [emptyRows]);

  // const classRows = getRows(courses);

  const handleClick = (event, courseCode) => {
    const selected = values.coursesTaken;
    const selectedIndex = values.coursesTaken.indexOf(courseCode);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, courseCode);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setFieldValue("coursesTaken", newSelected, false);
  };

  // let emptyRows = 0;

  // const getRows = (rows, searchText) => {
  //   if (searchText === "") {
  //     return rows;
  //   }

  //   const filteredRows = getFilteredRows(rows, searchText.toLowerCase());

  //   emptyRows = 6 - filteredRows.length;

  //   return filteredRows;
  //   // return searchText !== ""
  //   //   ? getFilteredRows(rows, searchText.toLowerCase())
  //   //   : rows;
  // };

  // const getFilteredRows = (rows, lowerCaseSearchText) => {
  //   return rows.filter((r) => {
  //     return (
  //       r.courseCode.toLowerCase().includes(lowerCaseSearchText) ||
  //       r.courseName.toLowerCase().includes(lowerCaseSearchText)
  //     );
  //   });
  // };

  const isSelected = (courseCode) =>
    values.coursesTaken.indexOf(courseCode) !== -1;

  // const emptyRows = 6 - values.length;

  // return (
  //   <>
  //     <div className={classes.root}>
  //       <Toolbar className={classes.toolbar}>
  //         <Typography className={classes.title}>Course History</Typography>
  //         <form onSubmit={handleSearchSubmit}>
  //           <TextField
  //             inputRef={searchRef}
  //             size="small"
  //             variant="outlined"
  //             placeholder="Search courses..."
  //             value={searchText}
  //             onChange={handleSearchTextChange}
  //           />
  //         </form>
  //       </Toolbar>
  //       <TableContainer className={classes.container}>
  //         <Table className={classes.table} size="small" stickyHeader>
  //           <TableHead>
  //             <TableRow>
  //               <TableCell />
  //               <TableCell
  //                 className={classes.headerCell}
  //                 align="left"
  //                 padding="none"
  //                 style={{ minWidth: 125 }}
  //               >
  //                 Course Code
  //               </TableCell>
  //               <TableCell
  //                 className={classes.headerCell}
  //                 align="left"
  //                 padding="default"
  //                 style={{ minWidth: 135 }}
  //               >
  //                 Course Name
  //               </TableCell>
  //               <TableCell
  //                 className={classes.headerCell}
  //                 align="right"
  //                 padding="default"
  //                 style={{ minWidth: 125 }}
  //               >
  //                 Credit Hours
  //               </TableCell>
  //             </TableRow>
  //           </TableHead>

  //           <TableBody>
  //             {getRows(courses, searchText).map((course, index) => {
  //               const isItemSelected = isSelected(course.courseCode);
  //               const labelId = `enhanced-table-checkbox-${index}`;
  //               return (
  //                 <TableRow
  //                   hover
  //                   onClick={(event) => handleClick(event, course.courseCode)}
  //                   aria-checked={isItemSelected}
  //                   tabIndex={-1}
  //                   key={course.courseCode}
  //                   selected={isItemSelected}
  //                 >
  //                   <TableCell padding="checkbox">
  //                     <Checkbox
  //                       checked={isItemSelected}
  //                       inputProps={{ "aria-labelledby": labelId }}
  //                     />
  //                   </TableCell>
  //                   <TableCell
  //                     component="th"
  //                     id={labelId}
  //                     scope="row"
  //                     padding="none"
  //                   >
  //                     {course.courseCode}
  //                   </TableCell>
  //                   <TableCell align="left">{course.courseName}</TableCell>
  //                   <TableCell align="right">{course.creditHours}</TableCell>
  //                 </TableRow>
  //               );
  //             })}

  //             {/* {emptyRows === 6 && (
  //               <TableRow style={{ height: 33 }}>
  //                 <TableCell colSpan={4}>{emptyRows === 6 ? "No classes found" : ""}</TableCell>
  //               </TableRow>
  //             )} */}
  //             {emptyRows > 0 && (
  //               <TableRow style={{ height: 33 * emptyRows }}>
  //                 <TableCell colSpan={4}>
  //                   {emptyRows === 6 ? "No classes found" : ""}
  //                 </TableCell>
  //               </TableRow>
  //             )}
  //           </TableBody>
  //         </Table>
  //       </TableContainer>
  //     </div>
  //   </>
  // );

  //   return (
  //     <>
  //       <div className={classes.root}>
  //         <Toolbar className={classes.toolbar}>
  //           {values.coursesTaken.length !== 0 ? (
  //             <Typography variant="subtitle1" className={classes.title}>
  //               {values.coursesTaken.length} selected
  //             </Typography>
  //           ) : (
  //             <Typography variant="subtitle1" className={classes.title}>
  //               Select courses you have completed
  //             </Typography>
  //           )}

  //           <form onSubmit={handleSearchSubmit}>
  //             <TextField
  //               inputRef={searchRef}
  //               size="small"
  //               variant="outlined"
  //               placeholder="Search courses..."
  //               value={searchText}
  //               onChange={handleSearchTextChange}
  //             />
  //           </form>
  //         </Toolbar>
  //         <TableContainer className={classes.container}>
  //           <Table className={classes.table} size="small" stickyHeader>
  //             <TableHead>
  //               <TableRow>
  //                 <TableCell style={{ minWidth: 55 }} />
  //                 <TableCell
  //                   className={classes.headerCell}
  //                   align="left"
  //                   padding="none"
  //                   style={{ minWidth: 125 }}
  //                 >
  //                   Course Code
  //                 </TableCell>
  //                 <TableCell
  //                   className={classes.headerCell}
  //                   align="left"
  //                   padding="default"
  //                   style={{ minWidth: 265 }}
  //                 >
  //                   Course Name
  //                 </TableCell>
  //                 <TableCell
  //                   className={classes.headerCell}
  //                   align="right"
  //                   padding="default"
  //                   style={{ minWidth: 125 }}
  //                 >
  //                   Credit Hours
  //                 </TableCell>
  //               </TableRow>
  //             </TableHead>

  //             <TableBody className={classes.tableBody}>
  //               {coursesToRender.map((course, index) => {
  //                 const isItemSelected = isSelected(course.courseCode);
  //                 const labelId = `enhanced-table-checkbox-${index}`;
  //                 return (
  //                   <TableRow
  //                     hover
  //                     onClick={(event) => handleClick(event, course.courseCode)}
  //                     aria-checked={isItemSelected}
  //                     tabIndex={-1}
  //                     key={course.courseCode}
  //                     selected={isItemSelected}
  //                   >
  //                     <TableCell padding="checkbox">
  //                       <Checkbox
  //                         checked={isItemSelected}
  //                         inputProps={{ "aria-labelledby": labelId }}
  //                       />
  //                     </TableCell>
  //                     <TableCell
  //                       component="th"
  //                       id={labelId}
  //                       scope="row"
  //                       padding="none"
  //                     >
  //                       {course.courseCode}
  //                     </TableCell>
  //                     <TableCell align="left">{course.courseName}</TableCell>
  //                     <TableCell align="right">{course.creditHours}</TableCell>
  //                   </TableRow>
  //                 );
  //               })}
  //               {emptyRows > 0 && (
  //                 <TableRow style={{ height: 33 * emptyRows }}>
  //                   <TableCell align="center" colSpan={4}>
  //                     {emptyRows === 6 ? "No classes found" : ""}
  //                   </TableCell>
  //                 </TableRow>
  //               )}
  //             </TableBody>
  //           </Table>
  //         </TableContainer>
  //       </div>
  //       <Typography className={classes.asterikText} variant="caption">
  //         *Only shows courses that can be used towards your degree
  //       </Typography>
  //     </>
  //   );
  // }

  return (
    <>
      <div className={classes.root}>
        <Toolbar className={classes.toolbar}>
          {values.coursesTaken.length !== 0 ? (
            <Typography variant="subtitle1" className={classes.title}>
              {values.coursesTaken.length} selected
            </Typography>
          ) : (
            <Typography variant="subtitle1" className={classes.title}>
              Select courses you have completed
            </Typography>
          )}

          <form onSubmit={handleSearchSubmit}>
            <TextField
              inputRef={searchRef}
              size="small"
              variant="outlined"
              placeholder="Search courses..."
              value={searchText}
              onChange={handleSearchTextChange}
            />
          </form>
        </Toolbar>
        <TableContainer className={classes.container}>
          <Table className={classes.table} size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: 55 }} />
                <TableCell
                  className={classes.headerCell}
                  align="left"
                  padding="none"
                  style={{ minWidth: 125 }}
                >
                  Course Code
                </TableCell>
                <TableCell
                  className={classes.headerCell}
                  align="left"
                  padding="default"
                  style={{ minWidth: 265 }}
                >
                  Course Name
                </TableCell>
                <TableCell
                  className={classes.headerCell}
                  align="right"
                  padding="default"
                  style={{ minWidth: 125 }}
                >
                  Credit Hours
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody className={classes.tableBody}>
              {coursesToRender.map((course, index) => {
                const isItemSelected = isSelected(course.courseCode);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, course.courseCode)}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={course.courseCode}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {course.courseCode}
                    </TableCell>
                    <TableCell align="left">{course.courseName}</TableCell>
                    <TableCell align="right">{course.creditHours}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 33 * emptyRows }}>
                  <TableCell align="center" colSpan={4}>
                    {emptyRows === 6 ? "No classes found" : ""}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Typography className={classes.asterikText} variant="caption">
        *Only shows courses that can be used towards your degree
      </Typography>
    </>
  );
}
