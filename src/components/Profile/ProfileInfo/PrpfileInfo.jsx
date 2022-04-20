import s from "./ProfileInfo.module.css";

const ProfileInfo = () =>{
    return(
            <div>
                <img alt="описание картинки" className={s.pick} src="https://www.fotolandscape.com/wp-content/uploads/2014/12/DSC_0225.jpg"/>
                <div>
                    + post
                </div>
            </div>
    );
}

export default ProfileInfo;