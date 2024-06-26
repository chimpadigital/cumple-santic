import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-primary w-full px-6 h-[100dvh] text-white">
      <div className="relative z-20 w-full max-w-[600px]">
        <h5 className="text-center text-white text-[30px]">Mis 35 añitos</h5>
        <div className="flex justify-center mt-4">
          <Image src={"/images/fotosanti.png"} width={130} height={130} alt="bg" className="w-[130px] h-[130px] rounded-full shadow-xl"></Image>
        </div>
        <div className="pt-6 flex justify-center">
          <div className="shadow-xl rounded-xl p-4 bg-primary w-fit">
            <p className="text-[16px]">Sábado 13 de Julio / 13pm a 00:00am</p>
            <p className="text-[14px]">Terraza, sol, guiso, música y mandarinas</p>
          </div>
        </div>

        <ul className="mt-6 gap-4 flex flex-col">
          <li>
            <button className="bg-white flex gap-2 w-full rounded-full shadow-xl text-primary justify-center items-center p-4">
              Line Up
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5663 0.5H6.35625C5.8396 0.5 5.42249 0.903987 5.42249 1.39927V11.1771C4.94375 10.9877 4.39155 10.8804 3.8038 10.8804C1.97893 10.8804 0.502441 11.9143 0.502441 13.1902C0.502441 14.4661 1.9813 15.5 3.8038 15.5C5.44382 15.5 6.80418 14.6624 7.0625 13.5668C7.09094 13.4869 7.10516 13.4002 7.10516 13.3112V13.2085C7.10516 13.2085 7.10516 13.197 7.10516 13.1925C7.10516 13.1879 7.10516 13.1811 7.10516 13.1765V5.90247H17.8198V11.1794C17.341 10.99 16.7888 10.8827 16.2011 10.8827C14.3786 10.8827 12.8997 11.9166 12.8997 13.1925C12.8997 14.4684 14.3786 15.5023 16.2011 15.5023C17.8435 15.5023 19.2038 14.6646 19.4598 13.5668C19.474 13.5234 19.4859 13.4801 19.493 13.4321C19.493 13.4321 19.4977 13.4299 19.5001 13.423C19.5048 13.4093 19.5048 13.3956 19.5001 13.3865C19.5024 13.3614 19.5048 13.3363 19.5048 13.3112V1.39927C19.5048 0.901704 19.0853 0.5 18.571 0.5H18.5663ZM17.9951 3.44887C17.9951 3.97611 17.5851 4.4052 17.0803 4.4052H7.9228C7.418 4.4052 7.00799 3.97839 7.00799 3.44887V3.02435C7.00799 2.49711 7.418 2.06802 7.9228 2.06802H17.0803C17.5851 2.06802 17.9951 2.49483 17.9951 3.02435V3.44887Z" fill="#3C5771" />
              </svg>
            </button>
          </li>
          <li>
            <button className="bg-white flex gap-2 w-full rounded-full shadow-xl text-primary justify-center items-center p-4">
              Menú
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.18131 13.7694L4.13602 18.4624C4.13313 18.7391 4.23528 18.999 4.42415 19.1954C4.61303 19.3928 4.86454 19.4999 5.1334 19.4999H16.0719C16.6221 19.4999 17.0693 19.0397 17.0693 18.4733V13.7109C18.0204 13.4649 19.9708 12.7001 20.7273 10.481C21.2274 9.01691 21.0308 7.35439 20.2031 6.03409C19.4543 4.84076 17.9857 3.51848 15.2007 3.78829C14.6302 2.37177 13.0614 0.384875 10.13 0.504902C9.07669 0.525733 6.94219 1.27665 5.96311 3.89443C4.28924 3.57899 1.5804 3.90038 0.397033 6.9824C-0.132014 8.36123 -0.132014 9.76485 0.398961 10.9364C0.861516 11.9561 1.8907 13.2407 4.18131 13.7694ZM1.51777 7.4387C2.76763 4.18706 6.04021 5.181 6.17704 5.22465L6.76487 5.4151L6.93641 4.80505C7.76708 1.86091 10.0606 1.74981 10.1675 1.74584C13.3678 1.61193 14.1764 4.50548 14.2091 4.62749L14.3489 5.16215L14.8808 5.07982C16.865 4.77033 18.3182 5.31888 19.1903 6.70862C19.8176 7.70852 19.967 8.96434 19.5892 10.0704C18.8453 12.2497 16.4939 12.5731 16.3957 12.586L15.8628 12.6505V18.259H5.34348L5.38588 13.8795H13.8449V12.6386H4.84913C3.15984 12.3469 2.02947 11.6 1.49175 10.4126C1.10147 9.55356 1.1111 8.49712 1.51777 7.43969V7.4387Z" fill="#3C5771" />
              </svg>
            </button>
          </li>
          <li>
            <button className="bg-white flex gap-2 w-full rounded-full shadow-xl text-primary justify-center items-center p-4">
              Qué aporto
              <Image src={"/images/Objects.png"} width={15} height={22} alt="bg" ></Image>
            </button>
          </li>
          <li>
            <button className="bg-white flex gap-2 w-full rounded-full shadow-xl text-primary justify-center items-center p-4">
              Dirección
              <Image src={"/images/Objects2.png"} width={15} height={22} alt="bg" ></Image>
            </button>
          </li>
          <li>
            <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSdbbEhgqkEBWloie1AwqsNYrd_sIaovNDs_A9xBulsB8SFuvg/viewform"}>
              <button className="bg-[#01CED7]  flex gap-2 w-full rounded-full shadow-xl underline text-[#08233E] justify-center items-center p-4">
                Confirmar Asistencia
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <Image src={"/images/fondo.png"} fill alt="bg" className="w-full object-cover absolute"></Image>
    </main>
  );
}
