import Header from "../../header/Header"
import TabLadang from "./tabLadang/TabLadang"
import ProfileLadang from "./profileLadang/Profileladang"
import JenisTumbuhan from "./jenisTumbuhan/JenisTumbuhan"
import TimeLine from "./timeLine/TimeLine"
import TodoHarian from "./todoHarian/todoHarian"

export default function PengelolaanMain(){

    return(
        <main className="bg-green-50 h-full w-full">
            <Header > Rutinitas penumbuhan ladang </Header>
            <TabLadang />
            <ProfileLadang />

            <section className="p-4 px-12">
                <JenisTumbuhan />
                <TimeLine />
            </section>

            <TodoHarian />

        </main>
    )
}