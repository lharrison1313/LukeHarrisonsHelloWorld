import React from 'react'
import './Skills.css'

const skillLevels = {
    0: {
        className: 'skill-level-beginner',
        skillBar: '|||',
        skillBarRemainder: '||||||',
    },
    1: {
        className: 'skill-level-intermediate',
        skillBar: '||||||',
        skillBarRemainder: '|||',
    },
    2: {
        className: 'skill-level-advanced',
        skillBar: '|||||||||',
        skillBarRemainder: '',
    },
}

function SkillItem(props) {
    let skillLevelMOD = Object.keys(skillLevels).length
    return (
        <li className="skill-item">
            <span
                className={
                    skillLevels[props.skillLevel % skillLevelMOD].className
                }
            >
                {skillLevels[props.skillLevel % skillLevelMOD].skillBar}
            </span>
            <span className="skill-level-remainder">
                {
                    skillLevels[props.skillLevel % skillLevelMOD]
                        .skillBarRemainder
                }
            </span>
            {props.skill}
        </li>
    )
}

function Skills() {
    return (
        <div>
            <div>
                <span>Experience Levels</span>
                <ul>
                    <SkillItem skillLevel={0} skill="Beginner" />
                    <SkillItem skillLevel={1} skill="Intermediate" />
                    <SkillItem skillLevel={2} skill="Professional" />
                </ul>
                <span>Programming/Markup Languages</span>
                <ul>
                    <SkillItem skillLevel={2} skill="Javascript (Node.js)" />
                    <SkillItem skillLevel={1} skill="Typescript" />
                    <SkillItem skillLevel={2} skill="HTML" />
                    <SkillItem skillLevel={2} skill="CSS" />
                    <SkillItem skillLevel={2} skill="SASS" />
                    <SkillItem skillLevel={1} skill="Java" />
                    <SkillItem skillLevel={0} skill="C" />
                    <SkillItem skillLevel={0} skill="C#" />
                    <SkillItem skillLevel={0} skill="x86 Assembly" />
                    <SkillItem skillLevel={0} skill="Matlab" />
                    <SkillItem skillLevel={1} skill="Python" />
                    <SkillItem skillLevel={2} skill="SQL" />
                </ul>
                <span>Frameworks and Libraries</span>
                <ul>
                    <SkillItem skillLevel={2} skill="React" />
                    <SkillItem skillLevel={1} skill="React Native" />
                    <SkillItem skillLevel={2} skill="Express" />
                    <SkillItem skillLevel={2} skill="Redux" />
                    <SkillItem skillLevel={0} skill="d3" />
                    <SkillItem skillLevel={1} skill="scikitlearn" />
                </ul>
                <span>Databases</span>
                <ul>
                    <SkillItem skillLevel={2} skill="DB2" />
                    <SkillItem skillLevel={0} skill="MySQL" />
                    <SkillItem skillLevel={0} skill="MongoDB" />
                </ul>
                <span>Tools And Programs</span>
                <ul>
                    <SkillItem skillLevel={2} skill="Microsoft Office Suite" />
                    <SkillItem skillLevel={2} skill="Visual Studio Code" />
                    <SkillItem skillLevel={2} skill="GIT" />
                    <SkillItem skillLevel={0} skill="IDA" />
                    <SkillItem skillLevel={0} skill="Radare2" />
                    <SkillItem skillLevel={1} skill="Android Studios" />
                    <SkillItem skillLevel={2} skill="Dbeaver" />
                    <SkillItem skillLevel={1} skill="Godot" />
                    <SkillItem skillLevel={0} skill="LTSpice" />
                </ul>
                <span>Operating Systems</span>
                <ul>
                    <SkillItem skillLevel={2} skill="Windows" />
                    <SkillItem skillLevel={2} skill="Linux" />
                    <SkillItem skillLevel={2} skill="Mac OS" />
                </ul>
            </div>
        </div>
    )
}

export default Skills
