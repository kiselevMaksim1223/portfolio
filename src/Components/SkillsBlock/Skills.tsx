import React from 'react';
import s from "./Skills.module.css"
import comStyles from "../../Common/Container/ContainerStyle.module.css"
import {SkillItem} from "./skillItem/SkillItem";
import {Title} from "../../Common/Title/Title";
import { TbBrandJavascript } from 'react-icons/tb';
import { TbBrandHtml5 } from 'react-icons/tb';
import { TbBrandCss3 } from 'react-icons/tb';
import { TbBrandReact } from 'react-icons/tb';
import { TbBrandRedux } from 'react-icons/tb';
import { TbBrandTypescript } from 'react-icons/tb';

export const Skills = () => {
    const skills = [
        {id:1, title:"HTML", description:"hfsaujdflsakdjl sdls;a dksaldnakjfh ndsla kvmdaklvmlsv", icon:<TbBrandHtml5 size={"60px"} color={"#ccd6f6"} />},
        {id:2, title:"CSS", description:"dskdmksjafh dskbvnjdskm cjdskbvci usdnvuildskjciosalkcsoaml;ck;s", icon:<TbBrandCss3 size={"60px"} color={"#ccd6f6"}/> },
        {id:3, title:"JS", description:"dsfndbsyiufvjiaufsj dvuifhd vnaioslkdj vnufidkdiusjkvovjdshiklvnsdolcxv", icon: <TbBrandJavascript size={"60px"} color={"#ccd6f6"}/>},
        {id:4, title:"React", description:"dfhsdak jvdshavjhcdksv nkdmckd smkdsjf kdjsfkdsjf kdsjsiruekvmkcn bjdhgjsdnjjfif ja k;LDKSJFIEUWJM;dkmv cksnbio jdikjdiofs", icon:<TbBrandReact size={"60px"} color={"#ccd6f6"}/> },
        {id:5, title:"Redux", description:"dfhsdak jvdshavjhcdksv nkdmckd smkdsjf kdjsfkdsjf kdsjsiruekvmkcn ", icon:<TbBrandRedux size={"60px"} color={"#ccd6f6"}/> },
        {id:6, title:"TS", description:"dfhsdak jvdshavjhcdksv nkdmckd smkdsjf kdjsfkdsjf kdsjsiruekvmkcn ", icon:<TbBrandTypescript size={"60px"} color={"#ccd6f6"}/> },
    ]
    return (
        <div className={s.wrapper}>
            <div className={comStyles.container}>
                <div className={s.skillsBlock}>
                    <Title text={"Skills"}/>
                    <div className={s.skills}>
                        {skills.map(si => {
                            return(
                            <SkillItem key={si.id} title={si.title} description={si.description}>
                                {si.icon}
                            </SkillItem>)
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
