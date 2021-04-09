import React, {useState} from "react";
import {useFormik} from "formik";
import "./FeedBackForm.css"

function FeedBackForm() {
    const [bool, setBool] = useState(false);

    function onDisableButton() {
        console.log("YES");
        // setBool(true);
        // onReset();
    }

    function onReset() {
        document.getElementById("myForm").reset();
        return;
    }

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            message: ""
        },
        onSubmit: async values => {
            const data = JSON.stringify(values);

            const myHeaders = new Headers();
            myHeaders.append("Access-Control-Allow-Origin", "*");
            myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: data
            };
            fetch("https://sending-feedback-form.herokuapp.com/send", requestOptions)
                // const proxy = "https://cors-anywhere.herokuapp.com";
                // fetch("http://localhost:5000/send", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log("error", error))
                .finally(onDisableButton());
        }
    });
    return (<>
        <div className="formBack__wrapper animated bounceInLeft">
            <div className="formBack__company-info">
                <h3>Integral</h3>
                <ul className="formBack__Ul">
                    <li>
                        <i className="fa fa-road"></i> г. Херсон
                    </li>
                    <li>
                        <i className="fa fa-phone"></i> (066) 911-0347
                    </li>
                    <li>
                        <i className="fa fa-envelope"></i> info@intshop.store
                    </li>
                </ul>
            </div>
            <div className="formBack__contact">
                <h3>Форма связи</h3>
                <form id="myForm" onSubmit={formik.handleSubmit}>
                    <p>
                        <label htmlFor="firstName">Имя</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </p>
                    <p>
                        <label htmlFor="lastName">Фамилия</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                    </p>
                    <p>
                        <label htmlFor="phone">Телефон</label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </p>
                    <p className="full">
                        <label htmlFor="message">Сообщение</label>
                        <textarea
                            id="message"
                            name="message"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        />
                    </p>
                    <p className="full">
                        <button disabled={bool} id="butSub" type="submit">
                            Отправить
                        </button>
                    </p>
                </form>
            </div>
        </div>
    </>)
}

export default FeedBackForm;
