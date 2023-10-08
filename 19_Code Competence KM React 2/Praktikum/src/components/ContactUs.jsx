import React from "react";
import { useForm } from "react-hook-form";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function ContactUs() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    alert(
      `
      Nama: ${data.firstName} ${data.lastName} 
      Email: ${data.email} 
      Pesan: ${data.message}
      `
    );
    reset();
  };

  return (
    <section id="contact" style={{ background: "#79155B", color: "white" }} >
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input type="text" className="form-control" {...register("firstName", { required: true })} />
                  {errors.firstName?.type === "required" && <p style={{ color: "orange" }}>First Name is required</p>}
                </div>
                <div className="col">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input type="text" className="form-control" {...register("lastName", { required: true })} />
                  {errors.lastName?.type === "required" && <p style={{ color: "orange" }}>Last Name is required</p>}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <div className="input-group mb-2 mr-sm-2">
                  <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                  </div>
                  <input type="email" className="form-control" id="email" aria-describedby="email" {...register("email", { required: true })} />
                </div>
                {errors.email?.type === "required" && <p style={{ color: "orange" }}>Email is required</p>}
              </div>
              <div className="mb-3">
                <label htmlFor="pesan" className="form-label">
                  Message
                </label>
                <textarea className="form-control" id="message" rows={3} defaultValue={""} {...register("message", { required: true })} />
                {errors.message?.type === "required" && <p style={{ color: "orange" }}>Message is required</p>}
              </div>
              <button type="submit" className="btn" style={{ backgroundColor: "orange" }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
