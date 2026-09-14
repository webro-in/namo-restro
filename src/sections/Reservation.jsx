import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";

import "./Reservation.scss";

function Reservation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateForm = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* =========================================
     WHATSAPP RESERVATION
  ========================================== */

  const handleSubmit = (event) => {
    event.preventDefault();

    const restaurantNumber = "918829017272";

    const whatsappMessage = `NEW RESERVATION REQUEST
Namo Restro

Name: ${form.name}
Phone: ${form.phone}
Guests: ${form.guests}
Date: ${form.date}
Time: ${form.time}
Occasion: ${form.occasion || "Not specified"}
Special Request: ${form.message || "None"}

Please confirm my reservation.`;

    const whatsappUrl =
      `https://wa.me/${restaurantNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
  };

  return (
    <section
      className="reservation section"
      id="reservation"
    >
      {/* Ambient Background */}
      <div className="reservation__glow reservation__glow--one" />
      <div className="reservation__glow reservation__glow--two" />
      <div className="reservation__grid" />

      <div className="container">
        <div className="reservation__layout">

          {/* =================================
              INTRO
          ================================= */}

          <div className="reservation__intro">

            <div className="reservation__eyebrow">
              <span />
              Reserve Your Table
              <span />
            </div>

            <span className="reservation__mini">
              Your table is waiting
            </span>

            <h2>
              Make it
              <br />
              <em>a Namo moment.</em>
            </h2>

            <p>
              Planning a dinner, catching up with friends or
              celebrating something special? Tell us when you're
              coming and we'll take care of the rest.
            </p>

            {/* Opening Hours */}
            <div className="reservation__open">

              <div className="reservation__open-icon">
                <Clock3
                  size={18}
                  strokeWidth={1.5}
                />
              </div>

              <div>
                <span>WE'RE OPEN</span>

                <strong>
                  24 Hours · Every Day
                </strong>
              </div>

              <span className="reservation__open-status">
                OPEN
              </span>

            </div>

            {/* Contact */}
            <div className="reservation__contact">

              <span>
                Prefer to call?
              </span>

              <a href="tel:+918829017272">

                <Phone
                  size={14}
                  strokeWidth={1.6}
                />

                <span>
                  +91 88290 17272
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.6}
                />

              </a>
            </div>

            {/* Note */}
            <div className="reservation__note">

              <Sparkles
                size={14}
                strokeWidth={1.5}
              />

              <span>
                Perfect for birthdays, gatherings,
                date nights & celebrations.
              </span>

            </div>
          </div>

          {/* =================================
              RESERVATION CARD
          ================================= */}

          <div className="reservation__card">

            <div className="reservation__card-glow" />

            <div className="reservation__card-number">
              01
            </div>

            {!submitted ? (
              <>

                {/* Card Header */}
                <div className="reservation__card-head">

                  <div>

                    <span>
                      01
                    </span>

                    <div>

                      <small>
                        RESERVATION
                      </small>

                      <h3>
                        Book a table
                      </h3>

                    </div>
                  </div>

                  <p>
                    Fill in your details and
                    we'll open WhatsApp for confirmation.
                  </p>

                </div>

                {/* =================================
                    FORM
                ================================= */}

                <form
                  className="reservation__form"
                  onSubmit={handleSubmit}
                >

                  {/* NAME */}
                  <div className="reservation__field reservation__field--full">

                    <label htmlFor="name">
                      Your Name
                      <span>
                        Required
                      </span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={(event) =>
                        updateForm(
                          "name",
                          event.target.value
                        )
                      }
                      required
                    />

                  </div>

                  {/* PHONE */}
                  <div className="reservation__field">

                    <label htmlFor="phone">
                      Phone Number
                      <span>
                        Required
                      </span>
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(event) =>
                        updateForm(
                          "phone",
                          event.target.value
                        )
                      }
                      required
                    />

                  </div>

                  {/* GUESTS */}
                  <div className="reservation__field">

                    <label htmlFor="guests">
                      Guests
                      <span>
                        Required
                      </span>
                    </label>

                    <div className="reservation__select">

                      <Users
                        size={15}
                        strokeWidth={1.5}
                      />

                      <select
                        id="guests"
                        value={form.guests}
                        onChange={(event) =>
                          updateForm(
                            "guests",
                            event.target.value
                          )
                        }
                      >

                        <option value="1">
                          1 Guest
                        </option>

                        <option value="2">
                          2 Guests
                        </option>

                        <option value="3">
                          3 Guests
                        </option>

                        <option value="4">
                          4 Guests
                        </option>

                        <option value="5">
                          5 Guests
                        </option>

                        <option value="6">
                          6 Guests
                        </option>

                        <option value="7">
                          7 Guests
                        </option>

                        <option value="8">
                          8 Guests
                        </option>

                        <option value="9">
                          9 Guests
                        </option>

                        <option value="10+">
                          10+ Guests
                        </option>

                      </select>

                      <ChevronDown size={14} />

                    </div>
                  </div>

                  {/* DATE */}
                  <div className="reservation__field">

                    <label htmlFor="date">
                      Date
                      <span>
                        Required
                      </span>
                    </label>

                    <div className="reservation__input-icon">

                      <CalendarDays
                        size={16}
                        strokeWidth={1.5}
                      />

                      <input
                        id="date"
                        type="date"
                        value={form.date}
                        onChange={(event) =>
                          updateForm(
                            "date",
                            event.target.value
                          )
                        }
                        required
                      />

                    </div>
                  </div>

                  {/* =================================
                      PREFERRED TIME
                  ================================= */}

                  <div className="reservation__field">

                    <label htmlFor="time">
                      Preferred Time
                      <span>
                        Required
                      </span>
                    </label>

                    <div
                      className={`reservation__time ${
                        form.time
                          ? "has-value"
                          : ""
                      }`}
                    >

                      <Clock3
                        className="reservation__time-icon"
                        size={18}
                        strokeWidth={1.5}
                      />

                      {!form.time && (
                        <span className="reservation__time-placeholder">
                          Select a time
                        </span>
                      )}

                      <input
                        id="time"
                        type="time"
                        value={form.time}
                        onChange={(event) =>
                          updateForm(
                            "time",
                            event.target.value
                          )
                        }
                        required
                        aria-label="Preferred time"
                      />

                      <span className="reservation__time-picker">

                        <Clock3
                          size={16}
                          strokeWidth={1.5}
                        />

                      </span>

                    </div>
                  </div>

                  {/* OCCASION */}
                  <div className="reservation__field">

                    <label htmlFor="occasion">
                      Occasion
                      <span>
                        Optional
                      </span>
                    </label>

                    <div className="reservation__select">

                      <select
                        id="occasion"
                        value={form.occasion}
                        onChange={(event) =>
                          updateForm(
                            "occasion",
                            event.target.value
                          )
                        }
                      >

                        <option value="">
                          Select occasion
                        </option>

                        <option value="Dinner">
                          Dinner
                        </option>

                        <option value="Birthday">
                          Birthday
                        </option>

                        <option value="Anniversary">
                          Anniversary
                        </option>

                        <option value="Date Night">
                          Date Night
                        </option>

                        <option value="Family Gathering">
                          Family Gathering
                        </option>

                        <option value="Corporate">
                          Corporate
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>

                      <ChevronDown size={14} />

                    </div>
                  </div>

                  {/* SPECIAL REQUEST */}
                  <div className="reservation__field reservation__field--full">

                    <label htmlFor="message">
                      Special Request
                      <span>
                        Optional
                      </span>
                    </label>

                    <textarea
                      id="message"
                      rows="3"
                      placeholder="Anything we should know?"
                      value={form.message}
                      onChange={(event) =>
                        updateForm(
                          "message",
                          event.target.value
                        )
                      }
                    />

                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="reservation__submit"
                  >

                    <span>

                      <small>
                        RESERVE VIA WHATSAPP
                      </small>

                      Send Reservation Request

                    </span>

                    <i>
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.5}
                      />
                    </i>

                  </button>

                </form>

                {/* Secure Note */}
                <div className="reservation__secure">

                  <Check size={13} />

                  <span>
                    WhatsApp confirmation · No payment required
                  </span>

                </div>

              </>
            ) : (

              /* =================================
                  SUCCESS
              ================================= */

              <div className="reservation__success">

                <div className="reservation__success-orbit" />

                <div className="reservation__success-icon">

                  <Check
                    size={25}
                    strokeWidth={1.5}
                  />

                </div>

                <span>
                  WHATSAPP OPENED
                </span>

                <h3>
                  Almost
                  <em> done.</em>
                </h3>

                <p>
                  Thanks, {form.name || "there"}.
                  Your reservation details have been
                  prepared in WhatsApp. Press Send there
                  to contact Namo Restro.
                </p>

                <div className="reservation__success-details">

                  <div>

                    <CalendarDays size={15} />

                    <span>
                      {form.date || "Selected date"}
                    </span>

                  </div>

                  <div>

                    <Clock3 size={15} />

                    <span>
                      {form.time || "Selected time"}
                    </span>

                  </div>

                  <div>

                    <Users size={15} />

                    <span>
                      {form.guests} guests
                    </span>

                  </div>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSubmitted(false)
                  }
                >
                  Make another request

                  <ArrowUpRight size={13} />
                </button>

              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservation;