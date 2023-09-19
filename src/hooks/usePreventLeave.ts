const usePreventLeave = () => {
    const listner = (e:BeforeUnloadEvent)=> {
        e.preventDefault();
        e.returnValue="";
    }
    const enablePrevent = () => window.addEventListener("beforeunload", function() {
       console.log('ee')
    });
    const disablePrevent = () => window.removeEventListener("beforeunload", listner);
    return { enablePrevent, disablePrevent }
}
export default usePreventLeave;