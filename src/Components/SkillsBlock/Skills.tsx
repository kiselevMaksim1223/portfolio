import React from 'react';
import s from "./Skills.module.css"
import comStyles from "../../Common/Container/ContainerStyle.module.css"
import {SkillItem} from "./skillItem/SkillItem";

export const Skills = () => {
    const skills = [
        {id:1, title:"HTML", description:"hfsaujdflsakdjl sdls;a dksaldnakjfh ndsla kvmdaklvmlsv"},
        {id:2, title:"CSS", description:"dskdmksjafh dskbvnjdskm cjdskbvci usdnvuildskjciosalkcsoaml;ck;s"},
        {id:3, title:"JS", description:"dsfndbsyiufvjiaufsj dvuifhd vnaioslkdj vnufidkdiusjkvovjdshiklvnsdolcxv"},
        {id:4, title:"JS", description:"dfhsdak jvdshavjhcdksv nkdmckd smkdsjf kdjsfkdsjf kdsjsiruekvmkcn bjdhgjsdnjjfif ja k;LDKSJFIEUWJM;dkmv cksnbio jdikjdiofs"},
    ]
    return (
        <div className={s.wrapper}>
            <div className={comStyles.container}>
                <div className={s.skillsBlock}>
                    <h2 className={s.title}>Skills</h2>
                    <div className={s.skills}>
                        {skills.map(si => <SkillItem key ={si.id} title={si.title} description={si.description}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};
