import React from "react";

export default async function formHandler(
  event: React.FormEvent<HTMLFormElement>,
  FILE: File,
  userChoose: string
) {
  event.preventDefault();

  let formData: FormData = new FormData();

  formData.append("FILE", FILE);
  formData.append("userChoose", userChoose);

  const requset = await fetch(`http://localhost:8000/${userChoose}`, {
    method: "POST",
    body: formData,
  });

  const text = await requset.blob();
  const url = URL.createObjectURL(text);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${FILE.name.slice(0, -4)}.${userChoose}`;
  link.click();
}
