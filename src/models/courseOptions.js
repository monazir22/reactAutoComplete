export const courseOptions = [
  {
    optionTitle: "Common Program Prerequisites (CPP)",
    options: [
      { courseCode: "BSC 2010C", courseName: "Biology I", creditHours: 4 },
      { courseCode: "BSC 2011C", courseName: "Biology II", creditHours: 4 },
      {
        courseCode: "CHM 2045C",
        courseName: "Chemistry Fundamentals I",
        creditHours: 4
      },
      {
        courseCode: "CHM 2046",
        courseName: "Chemistry Fundamentals II",
        creditHours: 3
      },
      {
        courseCode: "PHY 3101",
        courseName: "General Physics Using Calculus III",
        creditHours: 3
      }
    ],
    params: [{ first: [0, 2] }],
    preferred: null,
    paths: ["01"]
  },
  {
    optionTitle: "Communication Foundations: Area 3",
    options: [
      {
        courseCode: "SPC 1608",
        courseName: "Fundamentals of Oral Communication",
        creditHours: 3
      },
      {
        courseCode: "SPC 1603C",
        courseName: "Fundamentals of Technical Presentations",
        creditHours: 3
      },
      {
        courseCode: "COM 1000",
        courseName: "Introduction to Communication",
        creditHours: 3
      }
    ],
    params: "1*2&3",
    preferred: "SPC 1603C",
    paths: ["12"]
  }
];

// format for params
// * ---- means requires, ex. 1*2, means 1 requres 2 as prereq
// & ---- means left and right number are required, ex. 1*2&3, means 1 requires 2 and 3 as prereqs,
// | ---- mean left or right are required, ex. 1*2|3, means 1 requires 2 or 3 as prereqs
// , ---- is the delimetter for each

/*



coursePrereqs = courseDependecies[courseIndex].prereqs;

for(let course in courseMap){

  

}


preReqsLeft = coursePrereqs.filter( course => {
  let index = courseMap.get(course);

  // returns true if the particular prereq has not been selected in the CourseHistory form 'used' array, a
  // and has not been selected already as an option in the current form 'CourseOptions' form
  return used[index] === 0 && optionsSelected[index] === 0;
})








coursePrereqs.forEach( prereq => {

  let index = courseMap.get(prereq);

  // if the prereq has not been met yet
  if(used[index] === 0 && optionsSelected[index] === 0 && ){

   



  }

})





*/

// Function that builds original adjacency list, starting zero-in-degree nodes array,

/*

function startingTopSort(){



}


const coursesAvailable = [ [0, 1, 2, 4, 5], [7 , 8],]



// function that creates an adjacency list for the available course options prior to any course history being 
// added in the 'CourseHistory' step or courses being selected in the 'CourseOptions' step
function startingAdjList(courseDependencies, courseOptions, courseIndexMap){

  const adjList = [];

  let i = 0;

  // for each course
  for(let course in courseOptionsDeps){


    // for each prereq of the current course
    for(let prereq in course.prereqs){

      // if we have an or scenario 
     if( prereq.length > 1){

     }
      adjList.put(i, )

    }

  }


---------
  function getContexualizedDeps(courseDependencies, requiredCourses, coursesTaken){
    
      let courseOptionsDeps = [], i = 0;
      let extraDependencies = new Map();

      for(let course in courseDependencies){

        let newCourse = {courseCode: course.courseCode, prereqs: []};

        

        for(let prereq in course.prereqs){

          let filteredPreReq = []; 

          let optionsToKeep = [];


          for(let orOption in prereq){
            
            // if the prereq will be met by a course that is a required course, or 
            // because they already have credit for the prereq, then dont add the prereq to the
            // course's prereqs array
            if(requiredCourses.has(orOption) || coursesTaken.has(orOption) || doesSatisfyReq(orOption)){
              break;
            }
            // else if the prereq is a course that can be selected as an option in CourseOptions step,
            // then add the course to the prereqs 
            else if(courseOptionsIndexMap.has(orOption)){
              optionsToKeep.push(orOption);
            }
            // if the prereq is not a required course, has not been taken yet, and is not a course option,
            // then it is a course that will not count towards the degree requirements, but will be needed
            // to take a course that does satisfy degree requirements, so add it to extraDependencies Map
            else{
              extraDependencies.put(course.courseCode, orOption)
            }

          }

          // if the prereq has more than one element, then we have an "OR" scenario
          // i.e. we need to take class A or class B before taking this class
          if(prereq.length > 1){

            

            for(let orOption in prereq){

              if(applicableCourses.has(orOption)){

              }
            }

          }

          // if the prereq is a key in the courseIndexMap,
          // which maps course codes to their index in the courseOptions array,
          // i.e. this checks that the prereq is a course that can be selected in CourseOptions step
          if(courseIndexMap.has(prereq)){



          }
          // gets the index that the course should be at in the 
          let index = courseIndexMap.get(prereq);

          if()
        }

      }


  }


  // courseOptionCodesFlat[]        ----- array of all the course options, without separation by section and 
                                    ----- without extra data (i.e. courseName, creditHours, params, etc.)

  // courseOptionsDeps[]    ----- array of options and their prereqs which are within context of selection options
                                    ----- this means that only the prereqs that also are listed as selection options in 
                                    ----- the courseOptions step are considered

  // extraDependencies          ----- hashmap of potentionally other courses that need to be completed to take a 
                                ----- particular course in the courseOptions step, not including courses that are
                                ----- listed as options in the courseOptions step or ones that are required for the degree
                                ----- ex. for CS degree, if you wanted to take EEL 4781 as one of your technical electives
                                ----- you would need to take STA 3032 as a prereq. But STA 3032 isnt required by the degree
                                ----- (STA 2032 is) and it isnt an option for a technical elective either, so you would need
                                ----- to take STA 3032 while potentially having it not count towards the degree, it would only
                                ----- count if you took STA 3032 instead of STA 2032 and since STA 3032 is more comprehensive
                                ----- and advanced than STA 2032, it would cover the requirement for STA 2032.



    // courseEquivalencies      ------ hashmap                     


    // creditsViaLeapfrog   ----- set that contains courses that you if effect have credit for because you 
                            ----- completed a course that is more advanced. For instance, if you have credit for
                            ----- MAC 2311C because you got a 3 on the AP Calculus AB exam, then you in effect 
                            ----- also have credit for the courses that are prereqs to MAC 2311C in so far as
                            ----- if you want to take a course that requries one of MAC 2311C's prereqs, 
                            ----- or the prereqs of its prereq's, and so on, then you can. 
    key: courseCode
    value: array of courseCodes that this course can satisfy, ex. STA 3032 can satisfy STA 2023

    ----------



    creditsViaLeapfrog.has(orOption)



    function canSatisfyReq(course){

      if()

    }



























  // --------------------
  // for each course 
  courseDependencies.forEach( course => {

    course.prereqs.forEach( prereq => {



    })




    // gets the index that the course should be at in the 
    let index = courseIndexMap.get(course);




  })


}



function arePreReqsSatisfied(course, courseDependencies, coursesSelected){


}









*/
