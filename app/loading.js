
import style from './page.module.css'
export default function Loading() {
    return (
<div className={style.container}>
    <div className={style.loading_container}>
        <div className={style.spinner}></div>
        <div className={style.loading_text}>
            <span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span>
            <div className={style.dots}>
                <span>.</span><span>.</span><span>.</span>
            </div>
        </div>
    </div>
    
</div>
)
}