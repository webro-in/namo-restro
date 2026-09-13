import { ArrowRight, ArrowUpRight } from "lucide-react";
import "./Button.scss";

function Button({
  children,
  href,
  variant = "primary",
  size = "medium",
  icon = "arrow",
  type = "button",
  className = "",
  onClick,
  disabled = false,
}) {
  const buttonClass = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const renderIcon = () => {
    if (icon === "none") return null;

    if (icon === "external") {
      return <ArrowUpRight size={16} />;
    }

    return <ArrowRight size={16} />;
  };

  const content = (
    <>
      <span className="button__text">{children}</span>

      <span className="button__icon">
        {renderIcon()}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        onClick={onClick}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export default Button;