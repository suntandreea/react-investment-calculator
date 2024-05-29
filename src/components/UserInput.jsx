export default function UserInput({form, updateFormData}) {

  return (
    <section id="user-input">
      <form>
        <div className="input-group">
          <p>
            <label htmlFor="initialInvestment">initial investment</label>
            <input type="number" id="initialInvestment" value={form.initialInvestment} onChange={updateFormData} />
          </p>
          <p>
            <label htmlFor="annualInvestment">annual investment</label>
            <input type="number" id="annualInvestment" value={form.annualInvestment} onChange={updateFormData} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expectedReturn">expected return</label>
            <input type="number" id="expectedReturn" value={form.expectedReturn} onChange={updateFormData} />
          </p>
          <p>
            <label htmlFor="duration">duration</label>
            <input type="number" id="duration" value={form.duration} onChange={updateFormData} />
          </p>
        </div>
      </form>
    </section>
  );
}
