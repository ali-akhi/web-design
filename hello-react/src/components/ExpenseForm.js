import React from "react";
const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">آیتم</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="نام آیتم"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">قیمت آیتم(کارخانه)</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="قیمت به تومان"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "ویرایش" : "ثبت"}
        {/* submit  */}
      </button>
    </form>
  );
};

export default ExpenseForm;