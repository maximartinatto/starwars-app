import PreviousIcon from "../../../../public/images/previous.png";
import NextIcon from "../../../../public/images/next.png";
import Image from "next/image";

type paginationProps = {
    page: number,
    totalPage: number | undefined,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export default function Pagination({page, totalPage, setPage}: paginationProps) {
    return(
        <div className="flex justify-end m-4">
            <button className="btn btn-sm btn-circle" onClick={() => setPage(page - 1)} disabled={page === 1}><Image src={PreviousIcon} alt="previous" width={18} /></button>
            <button className="btn btn-sm btn-circle mx-1">{page}</button>
            <button className="btn btn-sm btn-circle" onClick={() => setPage(page + 1)} disabled={page === totalPage}><Image src={NextIcon} alt="next" width={18} /></button>
        </div>
    )
}