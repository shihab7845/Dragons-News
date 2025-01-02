import Marquee from "react-fast-marquee";

export default function BreakingNews() {
    return (
        <div className="flex justify-center items-center w-4/5 mx-auto mb-5">

            <button className="btn btn-active btn-secondary">Latest news</button>

            <Marquee speed={200}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>

        </div>
    )
}
