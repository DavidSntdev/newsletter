function Form() {
  return (
    <>
      <div className="flex flex-col gap-3 px-5">
        <label htmlFor="email" className="text-sm font-bold">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="email@company.com"
          className="pl-5 rounded-md h-16"
          style={{ border: "1px solid var(--colorGrey)" }}
        />
      </div>
    </>
  );
}

export default Form
