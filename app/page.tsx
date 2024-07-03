"use client";
import Image from "next/image";
import Link from "next/link";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useRef } from "react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isOpen: isOpen2, onOpen: onOpen2, onOpenChange: onOpenChange2 } = useDisclosure();
  const { isOpen: isOpen3, onOpen: onOpen3, onOpenChange: onOpenChange3 } = useDisclosure();
  const { isOpen: isOpen4, onOpen: onOpen4, onOpenChange: onOpenChange4 } = useDisclosure();

  const inputRef = useRef<any>(null);

  const copyText = () => {
    const copyText = inputRef.current.value;
    navigator.clipboard.writeText(copyText)
      .then(() => {
        alert("Texto copiado: " + copyText);
      })
      .catch((error) => {
        console.error("Error al copiar el texto: ", error);
      });
  };

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-primary w-full px-6 text-white py-6">
      <div className="relative z-20 w-full max-w-[600px]">
        <h5 className="text-center text-white text-[30px]">Mis 35 añitos</h5>
        <div className="flex justify-center mt-4">
          <Image src={"/images/fotosanti.png"} width={130} height={130} alt="bg" className="w-[130px] h-[130px] rounded-full shadow-xl"></Image>
        </div>
        <div className="pt-6 flex justify-center">
          <div className="shadow-xl rounded-xl p-4 bg-primary w-fit">
            <p className="text-[16px] text-center">Sábado 13 de Julio / 13pm a 00:00am</p>
            <p className="text-[14px] text-center">Terraza, sol, guiso, música y mandarinas</p>
          </div>
        </div>

        <ul className="mt-6 gap-4 flex flex-col">
          <li>
            <button onClick={() => { onOpen() }} className="bg-white flex gap-2 w-full rounded-full shadow-xl text-primary justify-center items-center p-4">
              Line Up
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5663 0.5H6.35625C5.8396 0.5 5.42249 0.903987 5.42249 1.39927V11.1771C4.94375 10.9877 4.39155 10.8804 3.8038 10.8804C1.97893 10.8804 0.502441 11.9143 0.502441 13.1902C0.502441 14.4661 1.9813 15.5 3.8038 15.5C5.44382 15.5 6.80418 14.6624 7.0625 13.5668C7.09094 13.4869 7.10516 13.4002 7.10516 13.3112V13.2085C7.10516 13.2085 7.10516 13.197 7.10516 13.1925C7.10516 13.1879 7.10516 13.1811 7.10516 13.1765V5.90247H17.8198V11.1794C17.341 10.99 16.7888 10.8827 16.2011 10.8827C14.3786 10.8827 12.8997 11.9166 12.8997 13.1925C12.8997 14.4684 14.3786 15.5023 16.2011 15.5023C17.8435 15.5023 19.2038 14.6646 19.4598 13.5668C19.474 13.5234 19.4859 13.4801 19.493 13.4321C19.493 13.4321 19.4977 13.4299 19.5001 13.423C19.5048 13.4093 19.5048 13.3956 19.5001 13.3865C19.5024 13.3614 19.5048 13.3363 19.5048 13.3112V1.39927C19.5048 0.901704 19.0853 0.5 18.571 0.5H18.5663ZM17.9951 3.44887C17.9951 3.97611 17.5851 4.4052 17.0803 4.4052H7.9228C7.418 4.4052 7.00799 3.97839 7.00799 3.44887V3.02435C7.00799 2.49711 7.418 2.06802 7.9228 2.06802H17.0803C17.5851 2.06802 17.9951 2.49483 17.9951 3.02435V3.44887Z" fill="#3C5771" />
              </svg>
            </button>
          </li>
          <li>
            <button onClick={() => { onOpen2() }} className="bg-white flex gap-2 w-full rounded-full shadow-xl text-primary justify-center items-center p-4">
              Menú
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.18131 13.7694L4.13602 18.4624C4.13313 18.7391 4.23528 18.999 4.42415 19.1954C4.61303 19.3928 4.86454 19.4999 5.1334 19.4999H16.0719C16.6221 19.4999 17.0693 19.0397 17.0693 18.4733V13.7109C18.0204 13.4649 19.9708 12.7001 20.7273 10.481C21.2274 9.01691 21.0308 7.35439 20.2031 6.03409C19.4543 4.84076 17.9857 3.51848 15.2007 3.78829C14.6302 2.37177 13.0614 0.384875 10.13 0.504902C9.07669 0.525733 6.94219 1.27665 5.96311 3.89443C4.28924 3.57899 1.5804 3.90038 0.397033 6.9824C-0.132014 8.36123 -0.132014 9.76485 0.398961 10.9364C0.861516 11.9561 1.8907 13.2407 4.18131 13.7694ZM1.51777 7.4387C2.76763 4.18706 6.04021 5.181 6.17704 5.22465L6.76487 5.4151L6.93641 4.80505C7.76708 1.86091 10.0606 1.74981 10.1675 1.74584C13.3678 1.61193 14.1764 4.50548 14.2091 4.62749L14.3489 5.16215L14.8808 5.07982C16.865 4.77033 18.3182 5.31888 19.1903 6.70862C19.8176 7.70852 19.967 8.96434 19.5892 10.0704C18.8453 12.2497 16.4939 12.5731 16.3957 12.586L15.8628 12.6505V18.259H5.34348L5.38588 13.8795H13.8449V12.6386H4.84913C3.15984 12.3469 2.02947 11.6 1.49175 10.4126C1.10147 9.55356 1.1111 8.49712 1.51777 7.43969V7.4387Z" fill="#3C5771" />
              </svg>
            </button>
          </li>
          <li>
            <button onClick={() => { onOpen3() }} className="bg-white flex gap-2 w-full rounded-full shadow-xl text-primary justify-center items-center p-4">
              Qué aporto
              <Image src={"/images/Objects.png"} width={15} height={22} alt="bg" ></Image>
            </button>
          </li>
          <li>
            <button onClick={() => { onOpen4() }} className="bg-white flex gap-2 w-full rounded-full shadow-xl text-primary justify-center items-center p-4">
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
      <Image src={"/images/fondo.png"} fill alt="bg" className="w-full object-cover !fixed top-0"></Image>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <div className="pt-6">
                  <Image src={"/images/coloresimagen.png"} width={400} height={500} alt="bg" className="w-full max-w-[400px] w-auto"></Image>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpen2} onOpenChange={onOpenChange2}>
        <ModalContent>
          {() => (
            <>
              <ModalBody className="text-secondary">
                <div className="flex items-center min-h-[400px] flex-col justify-center">
                  <div className="flex justify-center">
                    <svg width="85" height="77" viewBox="0 0 85 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.923 53.7765L16.7397 72.7951C16.728 73.9167 17.1415 74.9699 17.906 75.7659C18.6705 76.5658 19.6886 77 20.7769 77H65.0534C67.2806 77 69.0906 75.1347 69.0906 72.8393V53.5393C72.9405 52.5423 80.8355 49.4429 83.8975 40.4502C85.9219 34.5167 85.1262 27.7791 81.7755 22.4285C78.7447 17.5925 72.8001 12.2338 61.5272 13.3272C59.218 7.58668 52.8677 -0.465379 41.0019 0.0210406C36.7384 0.105461 28.0985 3.1486 24.1354 13.7574C17.3599 12.479 6.39514 13.7815 1.60513 26.2716C-0.53634 31.8594 -0.53634 37.5477 1.61293 42.2954C3.48525 46.4279 7.65116 51.6338 16.923 53.7765ZM6.1416 28.1208C11.2008 14.9433 24.4474 18.9713 25.0013 19.1482L27.3807 19.92L28.0751 17.4477C31.4374 5.51638 40.721 5.06614 41.154 5.05006C54.1081 4.50736 57.3808 16.2337 57.5134 16.7282L58.079 18.8949L60.2321 18.5613C68.2636 17.307 74.1458 19.5301 77.6759 25.1621C80.2153 29.2143 80.8199 34.3036 79.2908 38.7859C76.2795 47.6178 66.7619 48.9283 66.364 48.9806L64.2069 49.2419V71.971H21.6272L21.7989 54.2227H56.0389V49.1937H19.6262C12.7883 48.0118 8.21285 44.9847 6.03628 40.1728C4.45651 36.6915 4.49552 32.4102 6.1416 28.1249V28.1208Z" fill="#3C5771" />
                    </svg>
                  </div>
                  <p className="pt-4 text-center">
                    Guiso de lentejas
                  </p>
                  <p className="text-center">
                    Opción veggie
                  </p>
                  <div className="flex text-center">
                    Cocinero: {" "} <Link href={"https://www.instagram.com/martin_cabrera/"} className="text-[#FE5554]">@martin_cabrera</Link>
                  </div>
                </div>

              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpen3} onOpenChange={onOpenChange3}>
        <ModalContent>
          {() => (
            <>
              <ModalBody className="text-secondary flex min-h-[400px] items-center justify-center">
                <div className="flex gap-2 items-center justify-center text-center">
                  <p>
                    Manos para cortar las verduras
                  </p>
                  <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_15_521)">
                      <path d="M8.94485 6.4182C9.32019 6.4182 9.65483 6.4182 9.98947 6.4182C11.1064 6.4182 12.2234 6.40922 13.3449 6.40922C13.865 6.40922 14.2855 6.60235 14.6518 6.97514C15.104 7.43326 15.1583 8.66391 14.5795 9.14898C14.4755 9.23432 14.385 9.33313 14.2493 9.4544C14.9322 10.4201 14.801 11.3004 13.8604 12.0415C14.2132 12.5265 14.3036 13.0161 14.2222 13.5551C14.1363 14.1075 13.6931 14.386 13.3449 14.7004C13.4444 14.9743 13.5755 15.2034 13.6027 15.4415C13.6886 16.187 12.9696 16.964 12.1918 16.9865C11.6672 17.0045 11.1426 16.9865 10.6181 16.9865C8.94033 16.9865 7.26261 16.964 5.58941 16.991C3.12483 17.0314 1.04464 15.437 0.298484 13.2496C0.149253 12.8095 0.0497655 12.3334 0.0271547 11.8663C-0.0135448 10.995 -0.0361555 10.1146 0.221608 9.26576C0.407016 8.66391 0.714523 8.11146 1.16222 7.67131C1.85863 6.98861 2.58217 6.32388 3.31929 5.6861C4.08353 5.02586 4.94274 4.46893 5.5668 3.65598C6.10946 2.95083 6.49836 2.1828 6.59785 1.28452C6.66568 0.696141 7.17669 0.112257 7.68769 0.0179377C8.31627 -0.10333 9.01721 0.224543 9.36089 0.821901C9.52821 1.11384 9.6684 1.41477 9.65483 1.77408C9.63674 2.4972 9.68196 3.22032 9.62318 3.93894C9.55987 4.6935 9.3021 5.41213 9.02173 6.11728C8.9946 6.18914 8.98103 6.26999 8.94485 6.4182ZM8.44741 16.3173C8.44741 16.3173 8.44741 16.3263 8.44741 16.3308C9.61865 16.3308 10.7854 16.3308 11.9566 16.3308C12.0923 16.3308 12.2279 16.3308 12.3636 16.3173C12.6304 16.2948 12.8023 16.1331 12.8972 15.9086C13.1369 15.3426 12.8294 14.8351 12.2099 14.7767C11.9069 14.7498 11.5994 14.7767 11.2964 14.7677C10.9301 14.7588 10.7447 14.6465 10.7718 14.4354C10.817 14.13 11.0703 14.1614 11.2873 14.1614C11.7622 14.1614 12.237 14.1749 12.7118 14.1614C13.259 14.1479 13.6298 13.7751 13.6524 13.2362C13.6796 12.6029 13.3268 12.2301 12.6847 12.2211C12.3274 12.2166 11.9747 12.2211 11.6174 12.2211C11.518 12.2211 11.414 12.2211 11.3145 12.2076C11.1245 12.1762 11.0024 12.0639 11.007 11.8663C11.007 11.6552 11.1652 11.5878 11.3506 11.5699C11.4501 11.5609 11.5541 11.5654 11.6536 11.5654C12.1285 11.5654 12.6033 11.5743 13.0781 11.5699C13.6886 11.5699 14.0051 11.2465 14.0097 10.6267C14.0187 9.93947 13.7383 9.62507 13.1007 9.62058C12.7118 9.62058 12.3229 9.62507 11.9295 9.62058C11.7169 9.62058 11.5089 9.58465 11.4908 9.31516C11.4727 9.09958 11.631 8.9828 11.9476 8.96483C12.0335 8.96034 12.1149 8.96483 12.2008 8.96483C12.6395 8.96932 13.0826 8.96933 13.5213 8.9828C13.8424 8.99178 14.0865 8.875 14.2403 8.60103C14.6066 7.93181 14.3217 6.9437 13.3313 7.01556C13.2635 7.02005 13.1957 7.02005 13.1278 7.02005C11.622 7.01556 10.1116 7.01556 8.60569 7.00209C8.1173 6.99759 7.98163 6.7865 8.20774 6.3688C8.80014 5.27738 9.0353 4.10063 9.07599 2.88346C9.08956 2.38491 9.02625 1.87289 8.94485 1.37884C8.86345 0.898255 8.44741 0.610804 7.94545 0.62877C7.51133 0.646736 7.33496 0.844358 7.24452 1.39231C7.14051 2.0256 6.91892 2.62296 6.60237 3.18438C6.06876 4.12758 5.29999 4.84621 4.46339 5.51992C3.64488 6.17567 2.83542 6.8359 2.06213 7.54106C1.44711 8.10248 0.936109 8.7717 0.795922 9.62058C0.696434 10.2134 0.673823 10.8198 0.655735 11.4261C0.619557 12.5939 0.990375 13.6449 1.69583 14.5746C2.50982 15.6391 3.61775 16.223 4.94726 16.2948C6.11398 16.3577 7.28522 16.3083 8.45194 16.3083L8.44741 16.3173Z" fill="#FE5554" />
                    </g>
                    <defs>
                      <clipPath id="clip0_15_521">
                        <rect width="15" height="17" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center justify-center pt-4">
                    <p className="text-center" style={{ lineHeight: 1 }}>
                      Traer lo que quieras tomar
                    </p>
                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_15_514)">
                        <path d="M16.8682 6.62507C15.521 5.21507 14.1101 5.30074 12.5157 6.05036C12.5157 5.72909 12.4958 5.42211 12.4201 5.15439C12.3603 4.93664 12.2566 4.76887 12.1291 4.62966C13.839 3.40171 12.2726 0.710227 10.2039 1.3242C9.94088 0.699518 9.17162 0.22476 8.46214 0.110533C7.53743 -0.035821 6.87578 0.385393 6.21812 0.877998C4.84699 -0.935362 1.1322 0.289013 1.24779 2.43792C0.0440697 2.43792 -0.422272 3.54806 0.45461 4.20844C0.235389 4.3548 0.0799421 4.5654 0.0281263 4.86882C0.0281263 4.87596 0.0281263 4.87953 0.0281263 4.88667C0.0281263 4.90452 0.0161688 4.91879 0.0161688 4.93664C0.0520413 9.69136 -0.0834769 14.4604 0.123786 19.2115C0.13973 19.597 0.0639988 20.0825 0.410766 20.3716C0.952838 20.8285 2.24823 20.7607 2.94974 20.825C5.56843 21.0748 8.21502 21.0463 10.8257 20.7464C12.5795 20.5465 12.1809 19.6506 12.2287 18.1977C12.2287 18.1228 12.2327 18.0478 12.2367 17.9728C13.2053 18.4619 14.7 18.5119 15.5968 18.0371C17.5977 16.9841 17.781 14.4604 17.9086 12.6149C18.0281 10.8443 18.2713 8.08146 16.8722 6.6215L16.8682 6.62507ZM0.574185 4.97234C0.825292 4.07637 5.42494 4.47973 6.33769 4.4833C7.7407 4.48687 9.86914 4.17632 11.1765 4.67249C12.0175 4.99019 11.9697 5.95041 11.8979 6.79641C9.70572 6.59651 7.52148 6.5501 5.32131 6.64648C3.74292 6.71431 2.14859 6.52155 0.578171 6.67504C0.578171 6.10747 0.578171 5.54347 0.574185 4.97591V4.97234ZM12.4081 9.2987C12.4639 9.30584 12.5237 9.2987 12.5875 9.26301C13.3209 8.82751 14.5525 8.89177 14.8714 9.68065C15.0667 10.1661 15.0507 10.93 15.0587 11.4512C15.0746 12.1437 14.9311 12.9468 14.8235 13.6465C14.7279 14.2712 14.6402 15.0458 13.859 15.2457C13.3727 15.3706 12.7628 15.3171 12.3244 15.1029C12.3683 13.8035 12.4041 12.5042 12.4081 11.2049C12.4081 10.5695 12.4081 9.93409 12.4041 9.30227L12.4081 9.2987ZM1.48694 2.95194C1.70217 2.99121 1.87755 2.83771 1.82972 2.64495C1.37932 0.724505 4.94265 -0.357085 5.90722 1.38845C5.99491 1.54195 6.21812 1.53481 6.34566 1.43843C6.81998 1.0779 7.35009 0.595999 8.01971 0.571012C8.72919 0.542455 9.63796 1.07433 9.74558 1.72757C9.77348 1.89534 10.0126 1.94174 10.1561 1.87749C11.882 1.08147 13.002 3.43741 11.6628 4.30482C11.2124 4.10492 10.6344 4.0728 10.0923 4.0371C8.02768 3.9086 5.92715 3.97642 3.86249 3.99427C3.17693 4.0014 1.96524 3.7908 1.08038 3.96214C0.689774 3.66586 0.657887 2.80202 1.48295 2.94837L1.48694 2.95194ZM11.2841 20.1931C10.9373 20.4359 9.43069 20.3895 8.92449 20.4216C8.29075 20.4609 7.657 20.4894 7.01927 20.4966C5.74779 20.5144 4.47631 20.468 3.2128 20.3573C2.58703 20.3038 1.64637 20.393 1.12821 20.1146C0.466567 19.7577 0.67383 19.0616 0.657887 18.4762C0.554256 14.7067 0.586142 10.9407 0.578171 7.17122C2.30005 6.97489 4.11759 7.18906 5.85142 7.12124C7.85629 7.04271 9.85718 7.11053 11.8541 7.29258C11.8501 7.38182 11.8421 7.46749 11.8421 7.54602C11.8341 8.60977 11.8501 9.67708 11.8501 10.7408C11.8501 12.904 11.7584 15.0672 11.6907 17.2304C11.6667 17.9943 12.0055 19.6827 11.2801 20.1967L11.2841 20.1931ZM17.3705 12.1544C17.3067 13.6108 17.2429 15.3492 16.37 16.6235C15.5848 17.7694 13.5162 18.3619 12.2487 17.3874C12.2686 16.8056 12.2885 16.2237 12.3085 15.6383C13.0698 15.9025 14.1698 15.8953 14.7837 15.4241C15.1304 15.16 15.258 14.7245 15.3337 14.3426C15.5011 13.493 15.6207 12.5256 15.6287 11.6582C15.6366 10.9229 15.7124 9.44149 15.0706 8.8882C14.4409 8.34205 13.1335 8.41344 12.4041 8.78468C12.4041 8.52053 12.4041 8.25638 12.4041 7.99579C12.4041 7.59243 12.4599 7.11053 12.4958 6.62863C13.3408 6.186 14.1738 5.76836 15.1623 6.1039C15.9675 6.37519 16.5932 7.00344 16.9081 7.69952C17.498 9.00956 17.4342 10.7587 17.3745 12.1544H17.3705Z" fill="#FE5554" />
                        <path d="M6.05847 8.14232C5.2892 8.41004 5.345 9.81647 5.29319 10.3662C5.16564 11.7048 5.06998 13.0505 5.06201 14.3927C5.06201 15.0138 4.71126 19.5972 6.41719 19.0011C7.06688 18.7726 6.93136 17.8195 6.95926 17.3376C7.05094 15.7599 7.13863 14.1821 7.21436 12.6043C7.23827 12.0974 7.61294 7.60331 6.05847 8.14232ZM6.64438 12.8292C6.56467 14.432 6.70816 16.2346 6.37733 17.8088C6.4132 18.0051 6.3574 18.1693 6.20594 18.3086C6.07441 18.6084 5.99071 18.5834 5.95483 18.2336C5.71967 17.9123 5.71967 17.1092 5.68778 16.7986C5.60807 15.999 5.62002 15.1923 5.62002 14.3891C5.63198 12.9256 5.71967 11.4513 5.88708 9.99495C5.92295 9.68082 5.80337 8.8027 6.42516 8.93121C6.62445 8.97047 6.66033 10.0057 6.67627 10.1948C6.75599 11.0658 6.68823 11.9547 6.64438 12.8256V12.8292Z" fill="#FE5554" />
                        <path d="M2.6864 8.14232C1.91713 8.41004 1.97293 9.81647 1.92112 10.3662C1.79357 11.7048 1.69791 13.0505 1.68994 14.3927C1.68994 15.0138 1.33919 19.5972 3.04512 19.0011C3.69481 18.7726 3.55929 17.8195 3.58719 17.3376C3.67887 15.7599 3.76656 14.1821 3.84229 12.6043C3.8662 12.0974 4.24087 7.60331 2.6864 8.14232ZM3.27231 12.8292C3.1926 14.432 3.33609 16.2346 3.00526 17.8088C3.04113 18.0051 2.98533 18.1693 2.83387 18.3086C2.70234 18.6084 2.61864 18.5834 2.58276 18.2336C2.3476 17.9123 2.3476 17.1092 2.31571 16.7986C2.236 15.999 2.24795 15.1923 2.24795 14.3891C2.25991 12.9256 2.3476 11.4513 2.515 9.99495C2.55088 9.68082 2.4313 8.8027 3.05309 8.93121C3.25238 8.97047 3.28826 10.0057 3.3042 10.1948C3.38392 11.0658 3.31616 11.9547 3.27231 12.8256V12.8292Z" fill="#FE5554" />
                        <path d="M9.43444 8.32433C8.66518 8.59205 8.72098 9.99847 8.66916 10.5482C8.54162 11.8868 8.44596 13.2325 8.43799 14.5747C8.43799 15.1958 8.08723 19.7792 9.79317 19.1831C10.4429 18.9546 10.3073 18.0015 10.3352 17.5196C10.4269 15.9419 10.5146 14.3641 10.5903 12.7863C10.6142 12.2795 10.9889 7.78532 9.43444 8.32433ZM10.0204 13.0112C9.94064 14.614 10.0841 16.4166 9.75331 17.9908C9.78918 18.1872 9.73338 18.3514 9.58192 18.4906C9.45039 18.7904 9.36668 18.7654 9.33081 18.4156C9.09565 18.0943 9.09565 17.2912 9.06376 16.9806C8.98404 16.181 8.996 15.3743 8.996 14.5711C9.00796 13.1076 9.09565 11.6334 9.26305 10.177C9.29892 9.86283 9.17935 8.98471 9.80114 9.11321C10.0004 9.15248 10.0363 10.1877 10.0522 10.3769C10.132 11.2478 10.0642 12.1367 10.0204 13.0077V13.0112Z" fill="#FE5554" />
                        <path d="M14.7676 6.54307C14.4208 6.45383 14.2734 6.93573 14.6201 7.02497C15.513 7.257 15.8238 7.9852 15.9833 8.7241C16.051 9.03823 16.5891 8.90615 16.5214 8.59203C16.3221 7.6675 15.8557 6.82507 14.7676 6.54307Z" fill="#FE5554" />
                        <path d="M13.6714 6.56091C13.3127 6.56091 13.3127 7.06066 13.6714 7.06066C14.0301 7.06066 14.0301 6.56091 13.6714 6.56091Z" fill="#FE5554" />
                      </g>
                      <defs>
                        <clipPath id="clip0_15_514">
                          <rect width="18" height="21" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <small className="text-center">Habrá una base pero para que no nos quedemos corto</small>
                </div>

                <div className="flex flex-col gap-1 pt-4">
                  <p className="text-center">
                    Un pequeño aporte monetario
                  </p>
                  <div className="flex gap-2 justify-center items-center">
                    <input ref={inputRef} className="hidden" type="text" id="myInput" value="SANTI.CASTRO" />
                    <p className="text-[#C35285] text-center" style={{ lineHeight: 1 }}>ALIAS: SANTI.CASTRO</p>
                    <svg  onClick={copyText} className="cursor-pointer" width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_173_2)">
                        <path d="M22.6707 5.1275L17.945 0.333958C17.7261 0.111927 17.4597 0 17.1503 0H6.36821C5.37871 0 4.57324 0.817031 4.57324 1.82073V22.3289C4.57324 23.3282 5.38267 24.1496 6.36821 24.1496H21.2049C22.1941 24.1496 22.9999 23.3322 22.9999 22.3289V5.93396C22.9999 5.62005 22.8896 5.3499 22.6707 5.12786V5.1275ZM21.5011 22.3285C21.5011 22.4933 21.367 22.6293 21.2046 22.6293H6.36821C6.2018 22.6293 6.07169 22.4973 6.07169 22.3285V1.82073C6.07169 1.65594 6.20539 1.52031 6.36821 1.52031H16.9195V4.56568C16.9195 5.44833 17.629 6.16802 18.4992 6.16802H21.5015V22.3289L21.5011 22.3285Z" fill="#FE5554" />
                        <path d="M16.9282 26.1792C16.9282 26.3444 16.7949 26.48 16.6321 26.48H1.79497C1.63143 26.48 1.49845 26.3455 1.49845 26.1792V5.67144C1.49845 5.50628 1.63179 5.37065 1.79497 5.37065H2.79346C2.98395 5.37065 3.13814 5.21425 3.13814 5.02102V4.19998C3.13814 4.00675 2.98395 3.85034 2.79346 3.85034H1.79497C0.803676 3.85071 0 4.66591 0 5.67144V26.1792C0 27.1808 0.807629 28 1.79497 28H16.6317C17.619 28 18.4267 27.1808 18.4267 26.1792V25.8303C18.4267 25.6586 18.2894 25.5194 18.1201 25.5194H17.2348C17.0655 25.5194 16.9282 25.6586 16.9282 25.8303V26.1792Z" fill="#FE5554" />
                      </g>
                      <defs>
                        <clipPath id="clip0_173_2">
                          <rect width="23" height="28" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                  </div>
                  <small className="text-center pt-1">Tu aporte será destinado a la comida, bebida, escenario,
                    limpieza, y seguro por posible daños</small>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpen4} onOpenChange={onOpenChange4}>
        <ModalContent>
          {() => (
            <>
              <ModalBody className="text-secondary min-h-[400px] items-center flex justify-center">
                <div className="flex justify-center pt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#FF8F3B" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                </div>
                <p className="text-center">Dirección:</p>

                <p className="font-bold text-[#FF8F3B] text-center">El Bar de Mati</p>
                <p className="text-center">
                  Dirección {" "}
                  <span className="text-[#FE5554]">
                    Felix Frías 1170
                  </span>
                </p>
                <Link className="w-full" href={"https://maps.app.goo.gl/pnuytmYJS35KYN3c6"}>
                  <button onClick={() => { onOpen4() }} className="bg-[#FE5554] flex gap-2 rounded-full shadow-xl font-light w-full text-white justify-center items-center p-4">
                    Ver en Google Maps
                  </button>
                </Link>
                <p className="text-center pt-4 ">Recomendaciones</p>
                <div className="flex  pt-4 justify-center items-center w-full gap-2">
                  <p>Llevar Gorra</p>
                  <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2625 20C12.9412 20 12.5894 19.9846 12.207 19.9538C7.67914 19.5306 5.12456 15.9987 4.84922 15.5985C4.73449 15.4369 4.75744 15.2138 4.90276 15.083L4.91041 15.0753C5.07102 14.9214 5.32342 14.9291 5.46874 15.0907C5.49933 15.1291 5.52993 15.1676 5.54522 15.2138C5.98118 15.814 8.30631 18.7842 12.2758 19.1535C14.6392 19.369 15.4423 18.8457 16.4595 18.1917C17.3467 17.6146 18.364 16.9528 20.5208 16.645C22.7312 16.3295 23.8938 16.6912 24.3833 16.9297C23.8861 16.5142 23.0525 15.9756 22.0964 15.3523C21.301 14.829 20.3908 14.2442 19.5342 13.6286C19.3277 13.544 19.2359 13.3132 19.3124 13.1131C19.3965 12.9053 19.626 12.813 19.8248 12.8899L19.8554 12.9053L19.9472 12.9515C20.8038 13.5671 21.714 14.1596 22.5171 14.6828C23.6261 15.4062 24.5898 16.0371 25.0946 16.5065C25.4005 16.7989 25.4158 17.2837 25.1252 17.5992C24.8728 17.8685 24.4598 17.9224 24.1462 17.7146C24.0468 17.653 23.0907 17.0836 20.6203 17.4376C18.6393 17.7223 17.7445 18.2994 16.8802 18.8611C15.993 19.4459 15.1363 20 13.2625 20Z" fill="#FE5554" />
                    <path d="M1.98859 15.999C1.50674 15.999 1.10902 15.9144 0.772491 15.6143C0.214156 15.1141 0 14.1292 0 12.1131C0 10.4664 0.359476 8.95822 1.05548 7.62701C1.76679 6.28042 2.81462 5.14927 4.16839 4.25667C5.58335 3.33329 7.17422 2.70232 8.83393 2.41761C8.85687 2.41761 8.87982 2.40991 8.90277 2.40991H8.97925C10.2259 2.44839 11.465 2.64076 12.6734 2.98702C15.0062 3.64878 16.7348 4.77223 17.8055 6.31119C19.7635 9.1352 20.1001 13.0596 20.1154 13.2289V13.2673C20.1154 13.4905 19.9394 13.6675 19.7176 13.6675H19.6641C19.0063 13.5751 18.3486 13.5443 17.6832 13.5674C17.2395 13.5905 16.7577 13.6367 16.2682 13.7059C16.1917 13.7213 16.1229 13.729 16.054 13.7444C16.0387 13.7444 16.0311 13.7521 16.0158 13.7521C15.1898 13.8752 14.1649 14.1292 12.9794 14.4293C11.2661 14.8602 9.31578 15.3526 7.28895 15.5989C7.266 15.5989 7.24306 15.6066 7.22011 15.5989C6.42468 15.6989 5.8434 15.7297 5.23152 15.7528C4.76497 15.7758 4.29077 15.7912 3.66359 15.8451C3.43414 15.8682 3.21999 15.8913 3.01348 15.9144C2.67695 15.9682 2.33277 15.9913 1.98859 15.999ZM4.60435 4.92612C2.11097 6.55743 0.795436 9.04286 0.795436 12.1131C0.795436 13.7829 0.956053 14.7063 1.30788 15.0218C1.59087 15.2757 2.15686 15.2141 2.93699 15.1295C3.1435 15.1064 3.36531 15.0833 3.60241 15.0602C4.24487 15.0064 4.73437 14.9833 5.20858 14.9602C5.85104 14.9294 6.40173 14.9063 7.20481 14.8063C7.22776 14.8063 7.25835 14.7986 7.2813 14.8063C9.23165 14.5601 11.1285 14.083 12.8035 13.6598C13.9966 13.3597 15.0292 13.098 15.8934 12.9672H15.9011C15.9852 12.9518 16.077 12.9365 16.1611 12.9211H16.1688C16.6812 12.8441 17.186 12.7979 17.6602 12.7749H17.6679C18.2109 12.7518 18.7463 12.7672 19.2893 12.821C19.144 11.7053 18.6316 8.86588 17.1784 6.77289C14.8532 3.42563 9.58347 3.22557 8.9869 3.21018H8.9563C7.39603 3.47949 5.91988 4.0643 4.60435 4.92612Z" fill="#FE5554" />
                    <path d="M16.0466 13.744C15.8554 13.744 15.6948 13.6055 15.6566 13.4209C15.2512 11.3202 14.5934 8.4269 13.7597 6.56475C13.1096 5.11043 12.2454 4.05623 11.1899 3.43295C10.9987 3.32522 10.9375 3.07899 11.0522 2.88662C11.1593 2.69425 11.404 2.63269 11.5952 2.74811C12.796 3.45604 13.775 4.63335 14.494 6.24157C15.3583 8.17297 16.0313 11.1278 16.4443 13.267C16.4826 13.4824 16.3449 13.6902 16.1308 13.7363C16.1002 13.7363 16.0772 13.744 16.0466 13.744Z" fill="#FE5554" />
                    <path d="M5.75171 15.737C5.55285 15.737 5.38459 15.5908 5.36164 15.3908C5.31575 15.0676 5.26986 14.7059 5.22397 14.3135C4.74977 10.3429 5.14749 7.01877 6.35594 4.70263C6.80719 3.8485 7.32729 3.16366 7.89327 2.6635C8.05389 2.51729 8.30628 2.52499 8.4516 2.68658C8.59692 2.84817 8.58928 3.1021 8.42866 3.2483C8.42101 3.256 8.41336 3.256 8.41336 3.26369C7.91621 3.7023 7.45731 4.31019 7.05194 5.07198C5.91233 7.24192 5.55285 10.4045 6.00411 14.2211C6.05 14.6059 6.09589 14.9598 6.14178 15.283C6.17237 15.4985 6.01941 15.6985 5.80525 15.7293C5.78995 15.7293 5.76701 15.737 5.75171 15.737Z" fill="#FE5554" />
                    <path d="M6.44749 3.9102C6.27157 3.9102 6.1186 3.79478 6.07271 3.63319C5.61381 2.16347 6.42454 0.60142 7.87774 0.132035C9.33094 -0.33735 10.8912 0.485997 11.3578 1.94802C11.4419 2.21734 11.4878 2.50205 11.4878 2.78675C11.4878 2.87909 11.4801 2.97143 11.4725 3.06377C11.4496 3.27922 11.2507 3.44082 11.0365 3.41004C10.8224 3.38695 10.6694 3.19458 10.6847 2.97913C10.6924 2.90987 10.6924 2.84831 10.6924 2.77906C10.6924 1.6787 9.80514 0.786096 8.71142 0.786096C7.61769 0.786096 6.73048 1.6787 6.73048 2.77906C6.73048 2.97913 6.76107 3.18689 6.82226 3.37926C6.88344 3.58702 6.76872 3.81017 6.56221 3.87942C6.53162 3.90251 6.48573 3.9102 6.44749 3.9102Z" fill="#FE5554" />
                  </svg>

                </div>
                <div className="flex  py-4 justify-center items-center w-full gap-2">
                  <p>Protector Solar</p>
                  <svg width="14" height="27" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3392 2.54778C10.166 2.54778 10.0259 2.40941 10.0259 2.23847V0.309316C10.0259 0.138378 10.166 0 10.3392 0C10.5123 0 10.6525 0.138378 10.6525 0.309316V2.23847C10.6525 2.40941 10.5123 2.54778 10.3392 2.54778Z" fill="#FE5554" />
                    <path d="M10.0176 27H3.98227C3.21549 27 2.58887 26.3814 2.58887 25.6244V22.1487C2.58887 21.9777 2.72903 21.8394 2.90218 21.8394C3.07532 21.8394 3.21549 21.9777 3.21549 22.1487V25.6325C3.21549 26.0558 3.56178 26.3896 3.98227 26.3896H10.0176C10.4463 26.3896 10.7844 26.0477 10.7844 25.6325V22.1568C10.7844 21.9859 10.9246 21.8475 11.0977 21.8475C11.2708 21.8475 11.411 21.9859 11.411 22.1568V25.6325C11.411 26.3896 10.7844 27 10.0176 27Z" fill="#FE5554" />
                    <path d="M11.4853 22.4579H2.51478C1.83869 22.4579 1.26978 21.9369 1.22856 21.2613L0.00830078 2.25466V0.748786C0.00830078 0.341792 0.346346 0.00805664 0.758595 0.00805664H13.2498C13.662 0.00805664 14.0001 0.341792 14.0001 0.748786V2.25466L12.7716 21.2613C12.7303 21.9369 12.1697 22.4579 11.4853 22.4579ZM0.626675 2.23025L1.84693 21.2287C1.87167 21.5788 2.16024 21.8474 2.51478 21.8474H11.4853C11.8399 21.8474 12.1284 21.5788 12.1532 21.2287L13.3734 2.23025V0.748786C13.3734 0.675527 13.3157 0.618548 13.2415 0.618548H0.758595C0.68439 0.618548 0.626675 0.675527 0.626675 0.748786V2.23025Z" fill="#FE5554" />
                    <path d="M7.00008 2.54778C6.82693 2.54778 6.68677 2.40941 6.68677 2.23847V0.309316C6.68677 0.138378 6.82693 0 7.00008 0C7.17322 0 7.31339 0.138378 7.31339 0.309316V2.23847C7.31339 2.40941 7.17322 2.54778 7.00008 2.54778Z" fill="#FE5554" />
                    <path d="M3.66072 2.54778C3.48758 2.54778 3.34741 2.40941 3.34741 2.23847V0.309316C3.34741 0.138378 3.48758 0 3.66072 0C3.83387 0 3.97403 0.138378 3.97403 0.309316V2.23847C3.96579 2.40941 3.82562 2.54778 3.66072 2.54778Z" fill="#FE5554" />
                    <path d="M6.99989 12.1856C5.71367 12.1856 4.6748 11.1519 4.6748 9.89017C4.6748 8.62849 5.72192 7.59473 6.99989 7.59473C8.27787 7.59473 9.32498 8.62849 9.32498 9.89017C9.32498 11.1519 8.28611 12.1856 6.99989 12.1856ZM6.99989 8.21336C6.05996 8.21336 5.29318 8.97037 5.29318 9.89831C5.29318 10.8263 6.05996 11.5833 6.99989 11.5833C7.93982 11.5833 8.70661 10.8263 8.70661 9.89831C8.70661 8.97037 7.93982 8.21336 6.99989 8.21336Z" fill="#FE5554" />
                    <path d="M6.99983 13.8217C6.82669 13.8217 6.68652 13.6834 6.68652 13.5124V12.9182C6.68652 12.7473 6.82669 12.6089 6.99983 12.6089C7.17298 12.6089 7.31314 12.7473 7.31314 12.9182V13.5124C7.31314 13.6834 7.17298 13.8217 6.99983 13.8217Z" fill="#FE5554" />
                    <path d="M4.41107 12.7553C4.32862 12.7553 4.25442 12.7227 4.18846 12.6657C4.06478 12.5436 4.06478 12.3483 4.18846 12.2343L4.6172 11.8111C4.74087 11.689 4.93875 11.689 5.05418 11.8111C5.17786 11.9332 5.17786 12.1285 5.05418 12.2425L4.62544 12.6657C4.56773 12.7309 4.48528 12.7553 4.41107 12.7553Z" fill="#FE5554" />
                    <path d="M3.93277 10.1994H3.33089C3.15774 10.1994 3.01758 10.0611 3.01758 9.89013C3.01758 9.71919 3.15774 9.58081 3.33089 9.58081H3.93277C4.10592 9.58081 4.24608 9.71919 4.24608 9.89013C4.24608 10.0611 4.10592 10.1994 3.93277 10.1994Z" fill="#FE5554" />
                    <path d="M4.83151 8.05851C4.74906 8.05851 4.67486 8.02595 4.6089 7.96897L4.18016 7.54569C4.05648 7.42359 4.05648 7.22824 4.18016 7.11428C4.30383 6.99218 4.50171 6.99218 4.61714 7.11428L5.04588 7.53755C5.16956 7.65965 5.16956 7.85501 5.04588 7.96897C4.99641 8.03409 4.91396 8.05851 4.83151 8.05851Z" fill="#FE5554" />
                    <path d="M6.99983 7.17134C6.82669 7.17134 6.68652 7.03296 6.68652 6.86202V6.26781C6.68652 6.09687 6.82669 5.9585 6.99983 5.9585C7.17298 5.9585 7.31314 6.09687 7.31314 6.26781V6.86202C7.31314 7.0411 7.17298 7.17134 6.99983 7.17134Z" fill="#FE5554" />
                    <path d="M9.1684 8.05851C9.08595 8.05851 9.01174 8.02595 8.94578 7.96897C8.82211 7.84687 8.82211 7.65151 8.94578 7.53755L9.37452 7.11428C9.4982 6.99218 9.69608 6.99218 9.81151 7.11428C9.93518 7.23638 9.93518 7.43173 9.81151 7.54569L9.38277 7.96897C9.32505 8.02595 9.2426 8.05851 9.1684 8.05851Z" fill="#FE5554" />
                    <path d="M10.6689 10.1994H10.067C9.89383 10.1994 9.75366 10.0611 9.75366 9.89013C9.75366 9.71919 9.89383 9.58081 10.067 9.58081H10.6689C10.842 9.58081 10.9822 9.71919 10.9822 9.89013C10.9822 10.0611 10.8338 10.1994 10.6689 10.1994Z" fill="#FE5554" />
                    <path d="M9.59714 12.7553C9.51469 12.7553 9.44048 12.7227 9.37452 12.6657L8.94578 12.2425C8.82211 12.1204 8.82211 11.925 8.94578 11.8111C9.06946 11.689 9.26734 11.689 9.38277 11.8111L9.81151 12.2343C9.93518 12.3564 9.93518 12.5518 9.81151 12.6657C9.75379 12.7309 9.67134 12.7553 9.59714 12.7553Z" fill="#FE5554" />
                    <path d="M13.6867 2.54783H0.31331C0.140165 2.54783 0 2.40945 0 2.23851C0 2.06758 0.140165 1.9292 0.31331 1.9292H13.6867C13.8598 1.9292 14 2.06758 14 2.23851C14 2.40945 13.8598 2.54783 13.6867 2.54783Z" fill="#FE5554" />
                    <path d="M11.0976 25.3232H2.89388C2.72073 25.3232 2.58057 25.1848 2.58057 25.0139C2.58057 24.843 2.72073 24.7046 2.89388 24.7046H11.0976C11.2708 24.7046 11.411 24.843 11.411 25.0139C11.411 25.1848 11.2708 25.3232 11.0976 25.3232Z" fill="#FE5554" />
                    <path d="M8.55015 25.3232C8.377 25.3232 8.23684 25.1848 8.23684 25.0138C8.23684 24.3382 7.68442 23.7929 7.00009 23.7929C6.31575 23.7929 5.76334 24.3382 5.76334 25.0138C5.76334 25.1848 5.62317 25.3232 5.45003 25.3232C5.27688 25.3232 5.13672 25.1848 5.13672 25.0138C5.13672 24.0045 5.96946 23.1824 6.99184 23.1824C8.01422 23.1824 8.84697 24.0045 8.84697 25.0138C8.85521 25.1848 8.71505 25.3232 8.55015 25.3232Z" fill="#FE5554" />
                    <path d="M9.72083 19.5359H4.27913C4.10599 19.5359 3.96582 19.3975 3.96582 19.2266C3.96582 19.0556 4.10599 18.9172 4.27913 18.9172H9.72083C9.89397 18.9172 10.0341 19.0556 10.0341 19.2266C10.0341 19.3975 9.89397 19.5359 9.72083 19.5359Z" fill="#FE5554" />
                    <path d="M8.77253 17.8508H5.23543C5.06228 17.8508 4.92212 17.7124 4.92212 17.5415C4.92212 17.3706 5.06228 17.2322 5.23543 17.2322H8.77253C8.94568 17.2322 9.08584 17.3706 9.08584 17.5415C9.0776 17.7124 8.94568 17.8508 8.77253 17.8508Z" fill="#FE5554" />
                  </svg>


                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
}
