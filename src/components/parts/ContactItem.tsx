interface ContactItemProps {
    icon: JSX.Element;
    link: JSX.Element;
}

export default function ContactItem({ icon, link }: ContactItemProps) {
    return (
        <div className='flex my-1 items-center'>
            {icon} <p className='text-sm ml-2'>{link}</p>
        </div>
    );
}