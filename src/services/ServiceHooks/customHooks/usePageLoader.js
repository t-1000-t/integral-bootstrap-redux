import React, {useState} from "react"
import LoaderBase from "../../../modals/LoaderBase/LoaderBase";

const usePageLoader = () => {
    const [loading, setLoading] = useState(false)
    return [
        loading ? <LoaderBase /> : null,
        () => setLoading(true),  // show loader
        () => setLoading(false), // hide loader
    ]
}
export default usePageLoader

// in your component need write "[loader, showLoader, hideLoader] = usePageLoader()"