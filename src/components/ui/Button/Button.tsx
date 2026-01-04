import styles from "./Button.module.scss";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  onClick?: () => void;
  href?: string;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  href,
}: ButtonProps) {
  const buttonClass = {
    primary: styles.primaryBtn,
    secondary: styles.secondaryBtn,
    tertiary: styles.tertiaryBtn,
    quaternary: styles.quaternaryBtn,

  }[variant];

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
