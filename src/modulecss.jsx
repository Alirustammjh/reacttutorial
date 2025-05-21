import styles from './modulecss.module.css';

const Handlemodulecss = () => {
    const userimg = 'https://placehold.co/600x400/EEE/31343C';

    return (
        <div>
            <div className={styles.mainDiv}>
                <div className={styles.firstLineImg}>
                    <img className='img-avtar' src={userimg} alt="avatar" />
                </div>
                <div className={styles.secLineName}>John Deo</div>
                <div className={styles.thirdLineAge}>28</div>
                <div className={styles.fourthLineGrade}>12th</div>
            </div>
        </div>
    );
};

export default Handlemodulecss;
