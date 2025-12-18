import { useState } from "react";
import { useMultistepForm } from "../../hooks/useMultistepForm";

export const Q12_multi_form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const steps = [
    <div key="step1">
      <h2>Step1: 이름 입력</h2>
      <input
        name="name"
        onChange={handleChange}
        placeholder="이름을 입력해주세요."
        value={formData.name}
      />
    </div>,

    <div key="step2">
      <h2>Step2: 이메일 입력</h2>
      <input
        name="email"
        onChange={handleChange}
        value={formData.email}
        placeholder="이메일을 입력해주세요."
      />
    </div>,

    <div key="step3">
      <h2>Step3: 최종확인</h2>
      <p>이름 : {formData.name}</p>
      <p>이메일 : {formData.email}</p>
    </div>,
  ];

  const { step, next, back, goTo, isFirstStep, isLastStep } =
    useMultistepForm(steps);
  return (
    <div>
      <h1>회원가입</h1>

      {step}

      <div>
        {!isFirstStep && <button onClick={back}>이전</button>}

        <button
          onClick={() => {
            if (isLastStep) {
              alert("가입완료");
              setFormData({ name: "", email: "" });
              goTo(0);
            } else {
              next();
            }
          }}
        >
          {isLastStep ? "가입하기" : "다음"}
        </button>
      </div>
    </div>
  );
};
