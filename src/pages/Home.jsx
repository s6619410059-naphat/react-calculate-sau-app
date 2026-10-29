import CardMenu from "../components/CardMenu";
import calculate from "./../assets/calculate.png";
import bmi from "./../assets/bmi.png";
import bmr from "./../assets/bmr.png";
import car from "./../assets/car.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center ">
        {/*logo*/}
        <img src={calculate} alt="calculate" className="w-30 mt-20" />

        {/*web name*/}
        <p className="font-kanit text-3xl font-bold mt-5">
          เครื่องคำนวณออนไลน์
        </p>
        <p className="font-itim text-xl text-gray-700">
          เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง
        </p>

        {/*menu*/}

        <div className="flex">
          <CardMenu imgShow={bmi} titleShow="BMI ดัชนีมวลกาย" description="คำนวณว่าน้ำหนักส่วนสูงเหมาะสมหรือไม่" />
          <CardMenu imgShow={bmr} titleShow="อัตราการเผาผลาญพลังงาน" description="คำนวณอัตราการเผาผลาญพลังงานของร่างกาย" />
          <CardMenu imgShow={car} titleShow="เงินผ่อนรถรายเดือน" description="คำนวณเงินผ่อนรถรายเดือน" />
        </div>
      </div>
    </>
  );
}
