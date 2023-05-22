import { Field } from 'formik'
import React from 'react'
import { TiTick } from 'react-icons/ti'
import { RiCloseCircleFill } from 'react-icons/ri'
export default function Input({ titleINP, typeINP, placeholderINP, clickInINP, errorINP }) {
    return (
        <div className='w-100 containerINP py-2 rounded-2' style={{ position: "relative", }}>
            <Field name={titleINP} type={typeINP} id={titleINP} className={`w-100 border border-2 py-2  ${clickInINP && (errorINP ? " border-danger" : " border-success")}`} placeholder={placeholderINP} />
            {
                clickInINP && (
                    errorINP ? (
                        <RiCloseCircleFill className='text-danger position-absolute' style={{ right: "5px", top: "40%" }} />
                    ) : (
                        <TiTick className='text-success position-absolute' style={{ right: "5px", top: "40%" }} />

                    )
                )
            }
        </div>
    )
}
