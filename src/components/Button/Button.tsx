import "./Button.scss";

type buttonType = {
    icon: string,
    label:string,
    link: string
}

export default function Button(props: buttonType) {
    const {icon, label, link} = props;
    return (
        <link>
            <button className="button">{label}</button>
        </link>
    )
}