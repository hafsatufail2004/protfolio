import React from "react";
import AboutMe from "./component/about-me";
import { aboutMe, professionalData, skills } from "../data/page-data";
import ProfessionalExperiance from "./component/professional-experience";

const page = ()=>{
return <div>

<AboutMe data = {aboutMe} skills={skills} />
<ProfessionalExperiance data = {professionalData}/>
</div>
}

export default page;
