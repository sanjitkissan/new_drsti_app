import React from 'react';
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { string } from "yup";
import { FormikHelpers } from "formik/dist/types";
import Swal from "sweetalert2";
import { send } from "process";
type FormType={
name: string;
email: string;
phoneNumber: string;
message: string;
};
function Breadcrumb() {
    let initialValues: FormType={

        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    };

    const Formik = useFormik({ initialValues,
        validationSchema: Yup.object({
     
            name: Yup.string()
             .required("* Name is required")
            .min(2, "* Enter a valid name"),

          email: Yup.string()
          .email("* Enter a valid E-mail")
          .required("* E-mail is required"),
          phoneNumber: Yup.string().required("* phoneNumber is required").min(7,"* invalid phone number is ").max(15,"* invalid phone number is "),
  
     
      
        }),
      
      onSubmit:(Value: FormType, props: FormikHelpers<FormType>)=> {
      
        console.log(Value);
        props.resetForm();
        Swal.fire({
            title: "Message send Successfully",
            icon: "success",
            
        });
    },

    });

    return (
        <section className='bg-gradient-to-r from-red-600 to-blue-600 '>
        <section className='w-full h-[35rem] main-container flex items-end justify-between '>
         <div className='w-full h-full relative'>
         <form onSubmit={Formik.handleSubmit} className="w-3/4 h-[35rem] flex flex-col items-center justify-center gap-6 bg-white px-6 py-4 rounded-xl absolute -bottom-20">
         <h1 className='text-3xl text-center font-[Roboto]'>Get a free quote now</h1>
                <TextField fullWidth 
                placeholder="Name" 
                name="name"
                type={"text"}
                value={Formik.values.name}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                error={Boolean(
                    Formik.touched.name &&
                    Formik.errors.name
                )}
                helperText={
                    Formik.touched.name &&
                    Formik.errors.name
                }

                />
                <TextField fullWidth 
                 placeholder="E-mail"
                 name="email"
                 type={"email"}
                 value={Formik.values.email}
                 onChange={Formik.handleChange}
                 onBlur={Formik.handleBlur}
                 error={Boolean(
                     Formik.touched.email &&
                     Formik.errors.email
                 )}
                 helperText={
                     Formik.touched.email &&
                     Formik.errors.email
                 }
            
            
            />
                <TextField fullWidth
                placeholder="Phone Number"
                name="phoneNumber"
                type={"text"}
                value={Formik.values.phoneNumber}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
                error={Boolean(
                    Formik.touched.phoneNumber &&
                    Formik.errors.phoneNumber
                )}
                helperText={
                    Formik.touched.phoneNumber &&
                    Formik.errors.phoneNumber
                }
                />
               
        <button className="w-full center text-[#493d69] rounded-full border-2 px-4 py-2 border-[#493d69]"
            type="submit">Send Message
                </button>
           </form>
           </div>
          <div className='w-full h-full items-center justify-start '>
           <h1 className='text-white text-6xl font-bold center mt-20 font-[Roboto]'>Digital Product Design Agency </h1>
           <p className='text-gray-200 text-xl  mt-5 mb-4 font-[Roboto]'>Netguru created real-time shoe design customization app. Shiftwear app allows you to display HD images.</p>
            <span className='ml-96 center'>
            <button className='text-black rounded-full bg-white px-6 py-2 transition-all duration-300 ease-out font-[Roboto]'>Get Started</button>
           </span>
            </div>    
        </section>
        </section>
    );
}

export default Breadcrumb;