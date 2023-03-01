export const requiredCourses = {
  strictRequirements: []
};

/*
  strictReqs are classes that are explicitely stated as required in the degree program outline,
  associativeReqs are classes that are required because they are prereqs to strictReqs, they themselves
                  are not explicitely stated as requirements. This distinction is made because in certain
                  instances you may not need to take the associativeReqs. For instance, CS degree requires 
                  MAC 2311C, in which one of the possible ways to satisfy its prereqs is to have an 
                  appropriate score on the Math placement test (MPT), and a C or higher in MAC 1140C. Another one
                  of the ways is to just get an appropriate socre on the MPT. If a student gets a good enough score,
                  then they do not need 
*/
