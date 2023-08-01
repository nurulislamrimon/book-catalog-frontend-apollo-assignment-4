
const Toast = ({message,fn}:{message:string,fn:React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <div className="mt-20 toast toast-top toast-end">

  <div className="alert alert-success">
    <button onClick={()=>fn(false)} className="border rounded-full w-5 h-5 text-xs border-red-600 text-red-600 hover:font-bold hover:border-2 absolute top-5 right-5">X</button>
    <span>{message}</span>
  </div>
</div>
    );
};

export default Toast;