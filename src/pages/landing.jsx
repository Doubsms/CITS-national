import { Button, Menu, MenuList, MenuItem, MenuHandler, Input, Accordion, AccordionBody, AccordionHeader, Card, CardBody, CardFooter } from "@material-tailwind/react"
import { ArrowDropDown, BubbleChart, BookOnlineRounded } from "@mui/icons-material"
import { SvgIcon } from "@mui/material"
import HeaderBlur from "../assets/images/mine/light.png"
import HeaderImg from "../assets/images/mine/pc iphone.png"
import CarnetImg from "../assets/images/mine/Illustration.png"
import LaboImg from "../assets/images/mine/lab.png"
import HeroImg from "../assets/images/bghero.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BarChartRounded, PieChartRounded, BubbleChartRounded,  EditNoteRounded, ChevronRightRounded ,MedicalInformationRounded, LocalPharmacyRounded } from "@mui/icons-material"

function CustomIcon({ id, open }) {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={id === open ? "size-5 transition-transform" : "size-5 transition-transform rotate-180"}>
        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
    </svg>

}

export default function Landing() {
    let [open, setOpen] = useState(0)
    let handleOpen = (value) => {
        setOpen(open === value ? 0 : value)

    }
    let [activeOnglet, setActiveOnglet] = useState(1)
    let navigate = useNavigate()
    let handleClick = (e) => {
        navigate("/connexion")
    }

    return (
        <div className="flex flex-col p-6 min-h-screen">
            <div id="navbar" className="flex shadow-inner bg-white items-center justify-between pb-3 border-dashed px-3 pt-2 border-b border-gray-300">
                <h1 className="flex items-end">
                    <svg width="92" height="32" viewBox="0 0 92 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.085 26.4841V12.3839H37.9541C39.6408 12.3839 40.9202 12.7131 41.7922 13.3717C42.6642 14.0237 43.1002 14.9825 43.1002 16.2478C43.1002 16.9387 42.9251 17.5488 42.5751 18.0782C42.225 18.6011 41.7381 18.9853 41.1143 19.2306C41.8272 19.4114 42.3873 19.7761 42.7947 20.3249C43.2084 20.8737 43.4152 21.5452 43.4152 22.3392C43.4152 23.695 42.9888 24.7215 42.1359 25.4188C41.283 26.1161 40.0673 26.4712 38.4888 26.4841H33.085ZM35.9492 20.3443V24.1502H38.4028C39.0775 24.1502 39.6026 23.9888 39.9781 23.666C40.36 23.3367 40.551 22.8848 40.551 22.3102C40.551 21.0189 39.8922 20.3637 38.5747 20.3443H35.9492ZM35.9492 18.2912H38.0687C39.5135 18.2654 40.236 17.6811 40.236 16.5384C40.236 15.8992 40.0514 15.4408 39.6822 15.1632C39.3194 14.8792 38.7434 14.7371 37.9541 14.7371H35.9492V18.2912ZM53.9365 20.3733H48.4371V24.1502H54.8913V26.4841H45.573V12.3839H54.8723V14.7371H48.4371V18.0976H53.9365V20.3733ZM61.7175 21.3224H59.436V26.4841H56.5717V12.3839H61.7365C63.379 12.3839 64.6455 12.7551 65.5365 13.4975C66.4276 14.24 66.8734 15.2891 66.8734 16.6449C66.8734 17.6069 66.6661 18.4107 66.2527 19.0563C65.8455 19.6954 65.2248 20.2055 64.3907 20.5864L67.3985 26.3485V26.4841H64.3242L61.7175 21.3224ZM59.436 18.9691H61.746C62.4656 18.9691 63.0226 18.7851 63.417 18.4172C63.8114 18.0427 64.0092 17.5294 64.0092 16.8773C64.0092 16.2124 63.8214 15.6894 63.4455 15.3085C63.0768 14.9276 62.5069 14.7371 61.7365 14.7371H59.436V18.9691ZM74.2058 21.3224H71.9237V26.4841H69.0594V12.3839H74.2248C75.8667 12.3839 77.1337 12.7551 78.0248 13.4975C78.9159 14.24 79.3611 15.2891 79.3611 16.6449C79.3611 17.6069 79.1544 18.4107 78.7404 19.0563C78.3332 19.6954 77.7125 20.2055 76.879 20.5864L79.8863 26.3485V26.4841H76.8119L74.2058 21.3224ZM71.9237 18.9691H74.2343C74.9533 18.9691 75.5103 18.7851 75.9052 18.4172C76.2997 18.0427 76.4969 17.5294 76.4969 16.8773C76.4969 16.2124 76.3092 15.6894 75.9337 15.3085C75.5645 14.9276 74.9946 14.7371 74.2248 14.7371H71.9237V18.9691ZM85.8823 18.7367L88.7751 12.3839H91.9064L87.3427 21.3708V26.4841H84.4309V21.3708L79.8673 12.3839H83.008L85.8823 18.7367Z" fill="white" />
                        <path d="M10.987 31.5841C4.92849 31.5841 0 26.626 0 20.5323C0 14.4385 4.92899 9.48041 10.987 9.48041C17.045 9.48041 21.974 14.4385 21.974 20.5323C21.974 26.626 17.0459 31.5841 10.987 31.5841ZM10.987 10.536C5.50765 10.536 1.04938 15.0196 1.04938 20.5318C1.04938 26.044 5.50765 30.5275 10.987 30.5275C16.4663 30.5275 20.9251 26.0429 20.9251 20.5308C20.9251 15.0186 16.4673 10.536 10.987 10.536Z" fill="#2196F3" />
                        <path d="M18.96 21.0225C18.6182 19.7483 15.4851 19.6108 13.6203 20.0779C12.6437 20.3235 11.6456 20.6428 10.6162 20.8265C11.3697 21.4989 12.1788 22.135 13.34 22.2932C16.2211 22.6842 18.0112 21.775 18.96 21.0225Z" fill="#2196F3" />
                        <path d="M13.34 22.2932C12.1764 22.135 11.3697 21.4989 10.6162 20.8265C9.45013 19.7857 8.41298 18.6579 6.37723 19.0823C3.14069 19.7572 2.71488 23.6081 5.21404 26.0828C6.28706 27.2131 7.66455 28.0041 9.17779 28.3586C10.691 28.7132 12.2742 28.616 13.7333 28.079C15.1924 27.5419 16.4641 26.5883 17.3925 25.3352C18.3209 24.0819 18.8656 22.5835 18.96 21.0235C18.0112 21.775 16.221 22.6842 13.34 22.2932Z" fill="#673AB7" />
                        <path d="M15.034 13.9586C14.6301 14.8295 18.2304 15.7957 18.6611 18.6879C18.8687 15.8409 15.5335 12.882 15.034 13.9586Z" fill="#2196F3" />
                        <path d="M7.46619 17.5935C8.11524 17.3231 8.42345 16.5746 8.15463 15.9217C7.8858 15.2688 7.14167 14.9587 6.49262 15.2292C5.84357 15.4996 5.53536 16.2481 5.80418 16.9011C6.07306 17.5539 6.81714 17.8639 7.46619 17.5935Z" fill="#673AB7" />
                        <path d="M10.3549 14.08C10.6585 13.7746 10.6585 13.2795 10.3549 12.9741C10.0513 12.6687 9.55909 12.6687 9.25551 12.9741C8.95194 13.2795 8.95194 13.7746 9.25551 14.08C9.55909 14.3854 10.0513 14.3854 10.3549 14.08Z" fill="#2196F3" />
                        <path d="M13.1014 9.05206C14.2245 5.7149 13.4696 3.04871 11.1614 1.78241C9.58359 2.10513 8.647 2.87335 8.12549 3.93383C11.2204 3.68185 13.1844 5.63041 13.1014 9.05206Z" fill="#2196F3" />
                        <path d="M25.6983 6.13641C20.1389 4.1294 16.6304 4.81756 16.0786 9.39055C19.2648 12.6973 22.474 11.1146 25.6983 6.13641Z" fill="#2196F3" />
                        <path d="M21.2765 4.32541C21.5343 3.21728 21.6681 1.90776 21.6881 0.41748C15.9226 1.70883 13.3224 4.17658 15.2839 8.33846C15.3816 8.36203 15.4754 8.38119 15.5696 8.40085C16.0281 5.14422 18.0463 3.93835 21.2765 4.32541Z" fill="#2196F3" />
                    </svg>
                    <span className="-translate-x-14 font-extrabold font-mono text-lg bg-clip-text text-transparent bg-gradient-to-b from-deep-purple-700 to-blue-600">HealthNum</span></h1>
                <div className="flex w-[36%] justify-around items-center">
                    <a className="font-bold text-blue-800 hover:cursor-pointer duration-200 hover:scale-110">Home</a>
                    <Menu>
                        <MenuHandler>
                            <a className="hover:decoration-indigo-700 hover:cursor-pointer hover:text-indigo-500 hover:underline-offset-2 hover:underline duration-200 hover:scale-110"><span className="translate-x-1">Services </span> <span className="-translate-x-1"><ArrowDropDown></ArrowDropDown> </span> </a>
                        </MenuHandler>
                        <MenuList className="space-y-2">
                            <MenuItem className="py-3">Laboratoire Virtuel</MenuItem>
                            <MenuItem className="hover:bg-indigo-300 py-3" onClick={handleClick}><span className=" hover:text-blue-700 ">Carnet Medical Numerique</span></MenuItem>
                        </MenuList>
                    </Menu>
                    <div className="hover:decoration-indigo-700 hover:cursor-pointer hover:text-indigo-500 hover:underline-offset-2 hover:underline duration-200 hover:scale-110">Pricing</div>
                    <div className="hover:decoration-indigo-700 hover:cursor-pointer hover:text-indigo-500 hover:underline-offset-2 hover:underline duration-200 hover:scale-110">About</div>
                </div>
                <div className="flex space-x-5">
                    <Menu dismiss={{
                        itemPress: false
                    }} >
                        <MenuHandler>
                            <Button size="sm" className="flex items-center rounded-full space-x-3" variant="outlined" color="indigo">
                                <svg width="19" height="19" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.06129 13.2253L4.31871 15.9975L1.60458 16.0549C0.793457 14.5504 0.333374 12.8292 0.333374 11C0.333374 9.23119 0.763541 7.56319 1.52604 6.09448H1.52662L3.94296 6.53748L5.00146 8.93932C4.77992 9.58519 4.65917 10.2785 4.65917 11C4.65925 11.783 4.80108 12.5332 5.06129 13.2253Z" fill="#FBBB00" />
                                    <path d="M21.4804 9.00732C21.6029 9.65257 21.6668 10.3189 21.6668 11C21.6668 11.7637 21.5865 12.5086 21.4335 13.2271C20.9143 15.6722 19.5575 17.8073 17.678 19.3182L17.6774 19.3177L14.6339 19.1624L14.2031 16.4734C15.4503 15.742 16.425 14.5974 16.9384 13.2271H11.2346V9.00732H17.0216H21.4804Z" fill="#518EF8" />
                                    <path d="M17.6772 19.3176L17.6777 19.3182C15.8498 20.7875 13.5277 21.6666 11 21.6666C6.93783 21.6666 3.40612 19.3962 1.60449 16.0549L5.0612 13.2253C5.96199 15.6294 8.28112 17.3408 11 17.3408C12.1686 17.3408 13.2634 17.0249 14.2029 16.4734L17.6772 19.3176Z" fill="#28B446" />
                                    <path d="M17.8085 2.78892L14.353 5.61792C13.3807 5.01017 12.2313 4.65908 11 4.65908C8.21963 4.65908 5.85713 6.44896 5.00146 8.93925L1.52658 6.09442H1.526C3.30125 2.67171 6.8775 0.333252 11 0.333252C13.5881 0.333252 15.9612 1.25517 17.8085 2.78892Z" fill="#F14336" />
                                </svg>
                                <span>English</span> <ArrowDropDown /></Button>
                        </MenuHandler>
                        <MenuList>
                            <Input label="Language" color="primary" placeholder="Select text language"></Input>
                            <MenuItem>English</MenuItem>
                            <MenuItem>French</MenuItem>
                        </MenuList>
                    </Menu>
                    <Button color="indigo" size="sm" className="rounded-full" variant="gradient">Get Started</Button>
                </div>
            </div>
            <div id="Header" className="flex space-x-16 items-start py-8">
                <div className="w-[50%] relative">
                    <div className=" absolute h-[200px] blur-xl rotate-12 -translate-x-16 opacity-60 -z-10 overflow-hidden left-0 "><img src={HeaderBlur} width={800} alt="" /></div>
                    <div className="">
                        <h1 className="text-4xl leading-tight font-bold mb-2" style={{
                            fontSize: "2.35rem",

                        }}>Your <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-light-blue-700">  best practical solution </span>
                            in digital healthcare.</h1>
                        <p className=" text-start text-base ">
                            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-br from-indigo-400 to-light-blue-600">  Empoweringing Your Health With Our Services.</span> Experience personalized medical care from the comfort of your Hospital. Connect with best medical center or manage report booklet, prescription ans schedule appointment with ease.
                        </p>
                        <p className="text-base mt-4 mb-9">
                            <span className="text-transparent text-base font-semibold bg-clip-text bg-gradient-to-br from-indigo-400 to-light-blue-600">
                                Ready to grow your business health center ?
                            </span> <span>Get started or appointment today</span></p>

                        <div className="flex space-x-7">
                            <Button color="blue" onClick={()=> navigate("/lab")}>Virtual Laboratory</Button>
                            <Button variant="outlined" color="blue" onClick={handleClick}>Health Book</Button>
                        </div>
                    </div>

                </div>
                <div className="">
                    <img src={HeaderImg} width={400} className=" scale-110 translate-y-7 object-center object-cover" alt="labo" />
                </div>
            </div>
            <div id="hero1" className="w-full mt-11 border-2 rounded-2xl border-blue-200 border-dashed p-6">

                <h1 className="text-3xl font-semibold">Reach our <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-light-blue-700">Help Desk</span>  for support</h1>
                <div className="text-base flex justify-between mt-5 mb-3">
                    <div>
                        <div className="flex mb-3 space-x-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-blue-600">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                        </svg>
                            <span>Name and surname</span>
                        </div> <div><Input label="Enter your name"></Input></div>
                    </div>
                    <div>
                        <div className="flex mb-3 space-x-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-blue-600">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                            <span>Adress Email</span>
                        </div> <div><Input label="Enter your email"></Input></div>
                    </div>
                    <div>
                        <div className="flex mb-3 space-x-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-blue-600">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                        </svg>
                            <span>Phone number</span>
                        </div> <div><Input type="number" label="Enter your number"></Input></div>
                    </div>
                    <div>
                        <div className="flex mb-3 space-x-1 min-h-[24px] ">
                        </div> <div><Button color="indigo">Submit now <ChevronRightRounded /> </Button></div>
                    </div>

                </div>
            </div>
            <div id="benefits" className="my-11">
                <div className="flex flex-col items-center justify-start">
                    <h1 className="font-bold text-base text-blue-500">Solutions</h1>
                    <div className="text-base text-center">
                        <div className="w-1/2 mx-auto">
                            <h2 className="text-3xl my-3 font-semibold ">Digital Medical Record : Your health at your fingertips</h2>
                        </div>
                        <p className="w-2/3 mx-auto">Our <span className="font-bold">Digital Medical record </span>allows you to centralize your medical information in one place, accessible in realtime and securely.
                            No more searching for old paper records everything is digitized and available  at any time
                        </p>
                        <div className="flex space-x-3 justify-between text-start text-base my-7">
                            <Card className="w-[50%] flex flex-col justify-center">
                                <CardBody>
                                    <div className=" min-h-max">
                                        <Accordion open={open === 1} className={` ${open === 1 ? "border border-indigo-600 shadow-md shadow-indigo-100 p-3 rounded-xl" : ""}`} icon={<CustomIcon id={1} open={open} />}>
                                            <AccordionHeader onClick={() => handleOpen(1)} className={open === 1 ? "!border-b-0 text-indigo-500 hover:!text-indigo-600" : ""}> <span> {open === 1 && <BarChartRounded color="secondary" ></BarChartRounded>} Real-time updates</span> </AccordionHeader>
                                            <AccordionBody className="text-base">With our platform, your medical information is updated instantly.whether it's a new prescription,test result, or a consultation.Summary you get real time access to yout most recent data, so you and your healthcare provider are always on the same page.</AccordionBody>
                                        </Accordion>
                                        <Accordion open={open === 2} className={` ${open === 2 ? "border border-indigo-600 shadow-md shadow-indigo-100 p-3 rounded-xl" : ""}`} icon={<CustomIcon id={1} open={open} />}>
                                            <AccordionHeader onClick={() => handleOpen(2)} className={open === 2 ? "!border-b-0 text-indigo-500 hover:!text-indigo-600" : ""}> <span> {open === 2 && <PieChartRounded color="secondary" />} Easy sharing in urgency case</span> </AccordionHeader>
                                            <AccordionBody>Sharing medical information has never been simple. You can securely share specific sections or you entire medical record with doctors, specialists, or caregivers with just one click. This featureis particularity helpful in emergency situations where quickly access to your medical history can make a big difference </AccordionBody>

                                        </Accordion>
                                        <Accordion open={open === 3} className={` ${open === 3 ? "border border-indigo-600 shadow-md shadow-indigo-100 p-3 rounded-xl" : ""}`} icon={<CustomIcon id={3} open={open} />}>
                                            <AccordionHeader onClick={() => handleOpen(3)} className={open === 3 ? "!border-b-0 text-indigo-500 hover:!text-indigo-600" : ""}> <span> {open === 3 && <BubbleChartRounded color="secondary" />} Consultation history</span> </AccordionHeader>
                                            <AccordionBody className="text-base">keep track of all your pass medical consultations, diagnoses, treatments and prescriptions. This historical record provides an overview of your health journey, helping you and your doctor monnitor long-term health conditions and make more informed decisions about tour treatment.  </AccordionBody>

                                        </Accordion>


                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <Button variant="outlined" onClick={()=>navigate("/connexion")} color="indigo" className="hover:translate-y-1 transition-transform hover:translate-x-1 flex items-center space-x-3"><span>Report Medical Solution</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" strokeWidth={2} viewBox="0 0 24 24" fill="currentColor" className={"size-5 font-bold -rotate-90"}>
                                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                                        </svg>
                                    </Button>
                                </CardFooter>
                            </Card>
                            <div className="w-[45%] h-max">
                                <img src={CarnetImg} className=" object-cover object-center " alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-center mt-4 text-sm text-blue-600">Complementary solution</h4>
                        <div className="mx-auto mt-7 mb-2 w-[55%] text-center">
                            <h2 className="text-3xl font-semibold">Virtual Lab : Monitoring and analysis of your medical data</h2>
                        </div>
                        <p className="w-[75%] mx-auto text-center text-base">The <span className="font-bold">Virtual Lab </span> take healthcare management to the next level by offering aa sophisticated platform for viewing and analysing your test results, whether it's blood tests, imaging results or specialized diagnostic report, the virtual lab ensures that you have all the necessary at your fingertips, integrated seamlessly with your medical report
                        </p>
                        <div>
                            <div className="flex justify-center space-x-14 items-center mt-11 mb-5">
                                <Button color="indigo" onClick={() => setActiveOnglet(1)} variant={activeOnglet === 1 ? "outlined" : "gradient"}
                                    className={activeOnglet === 1 ? "rounded-s-none border-indigo-500 hover:border-[1.7px] hover:shadow-indigo-100 hover:translate-x-2 hover:border-indigo-500 shadow-xl border-s-2 items-center" : "border-indigo-500 hover:border-[1.7px] hover:shadow-indigo-100 hover:translate-x-2 hover:border-indigo-500 shadow-xl border-s-2 items-center"}>
                                    <MedicalInformationRounded sx={{
                                        "color": "secondary",
                                    }} />
                                    <span className="ms-2">Access your tests online</span>
                                </Button>
                                <Button color="indigo" variant={activeOnglet === 2 ? "outlined" : "gradient"} onClick={() => setActiveOnglet(2)}
                                    className={activeOnglet === 2 ? "rounded-s-none border-indigo-500 hover:border-[1.7px] hover:shadow-indigo-100 hover:translate-x-2 hover:border-indigo-500 shadow-xl border-s-2 items-center" : "border-indigo-500 hover:border-[1.7px] hover:shadow-indigo-100 hover:translate-x-2 hover:border-indigo-500 shadow-xl border-s-2 items-center"}>

                                    <BubbleChart sx={{
                                        "color": "secondary",

                                    }} />
                                    <span className="ms-2">Track medical results</span>
                                </Button>
                                <Button color="indigo" variant={activeOnglet === 3 ? "outlined" : "gradient"} onClick={() => setActiveOnglet(3)}
                                    className={activeOnglet === 3 ? "rounded-s-none border-indigo-500 hover:border-[1.7px] hover:shadow-indigo-100 hover:translate-x-2 hover:border-indigo-500 shadow-xl border-s-2 items-center" : "border-indigo-500 hover:border-[1.7px] hover:shadow-indigo-100 hover:translate-x-2 hover:border-indigo-500 shadow-xl border-s-2 items-center"}>

                                    <BookOnlineRounded sx={{
                                        "color": "secondary",
                                    }} />
                                    <span className="ms-2">Integration with medical devices</span>
                                </Button>
                            </div>
                            {
                                activeOnglet === 1 ? <div className="flex justify-around shadow-lg p-7 rounded-xl">
                                    <div className="w-3/5 text-base translate-y-8">
                                        <div className="w-fit h-fit bg-indigo-300 rounded-2xl p-2 bg-opacity-35">
                                            <MedicalInformationRounded color="secondary" sx={{
                                                "color": "secondary",
                                                "width": "2rem",
                                                "height": "2rem"
                                            }} />
                                        </div>
                                        <h4 className="text-2xl font-semibold my-3">Access your tests online</h4>
                                        <p className=" leading-relaxed mt-3 mb-5">
                                            Forget about waiting for physical copies of lab results. with the <span className="font-semibold">Virtual Lab</span>, you can access your tests results as soon as as they are available. whether it's routine blood work, X-ray sans, or more complex mab reports, all results are uploaded directly to your account, providing immediate insight into yout health status
                                        </p>
                                        <Button color="blue" onClick={()=> navigate("/lab")} variant="gradient" className="mt-8 flex space-x-2 items-center"><span>Explore the Virtual Laboratory</span> <LocalPharmacyRounded /> </Button>
                                    </div>
                                    <div className="w-[50%]">
                                        <img src={LaboImg} className="" alt="" />
                                    </div>
                                </div> : activeOnglet === 2 ? <div className="flex justify-around shadow-lg p-7 rounded-xl">
                                    <div className="w-3/5 text-base translate-y-8">
                                        <div className="w-fit h-fit bg-indigo-300 rounded-2xl p-2 bg-opacity-35">
                                            <BubbleChartRounded color="secondary" sx={{
                                                "color": "secondary",
                                                "width": "2rem",
                                                "height": "2rem"
                                            }} />
                                        </div>
                                        <h4 className="text-2xl font-semibold my-3">Track medical results</h4>
                                        <p className=" leading-relaxed mt-3 mb-5">
                                            The virtual la doeen't just show your results its helps you understand them. With tools that allow you to visualize trends over time, you can monitor your health progress. For exemple, you can see how your sugar levels have avolved over the pasts months, or track cholesterol levels before and after a new treatment.
                                        </p>
                                        <Button color="blue" variant="gradient" className="mt-8 flex space-x-2 items-center"><span>Explore the Virtual Laboratory</span> <LocalPharmacyRounded /> </Button>
                                    </div>
                                    <div className="w-[50%]">
                                        <img src={LaboImg} className="" alt="" />
                                    </div>
                                </div> : <div className="flex justify-around shadow-lg p-7 rounded-xl">
                                    <div className="w-3/5 text-base translate-y-8">
                                        <div className="w-fit h-fit bg-indigo-300 rounded-2xl p-2 bg-opacity-35">
                                            <BookOnlineRounded color="secondary" sx={{
                                                "color": "primary",
                                                "width": "2rem",
                                                "height": "2rem"
                                            }} />
                                        </div>
                                        <h4 className="text-2xl font-semibold my-3">Integration with medical devices</h4>
                                        <p className=" leading-relaxed mt-3 mb-5">
                                            Our platform supports the integration of data from external medical devices such as glucose monitors, heart rate sensors, and blood pressure monitors. This allow continuous health tracking with real-time updates that feed directly into both your medical record and virtual lab, providing a more complete picture of your overall health.
                                        </p>
                                        <Button onClick={()=> navigate("/lab")} color="blue" variant="gradient" className="mt-8 flex space-x-2 items-center"><span>Explore the Virtual Laboratory</span> <LocalPharmacyRounded /> </Button>
                                    </div>
                                    <div className="w-[50%]">
                                        <img src={LaboImg} className="" alt="" />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className=" text-center">
                        <h2 className=" mt-10 mb-7 text-base font-bold text-blue-700">Get Started with our Solutions</h2>
                        <h4 className=" text-3xl pb-5 bg-clip-text text-transparent bg-gradient-to-br from-blue-300 via-indigo-600 to-blue-700 font-semibold ">
                            Virtual Laboratory and digital Medical Record
                        </h4>
                    </div>
                    <div className=" w-[98vw] h-[85vh] overflow-hidden rounded-t-xl relative">
                        <img src={HeroImg} alt="hero cta image" className="w-full h-full object-cover object-center" />
                        <div className="bg-gradient-to-t from-black to-black opacity-80 w-full h-full top-0 left-0 absolute"></div>
                        
                        <div className="h-full w-full absolute top-0 left-0 backdrop-blur-md flex flex-col justify-center text-center items-center">
                        <h4 className=" text-2xl font-semibold leading-loose text-white">
                            Ready to simplify and discover the management  <br></br> of your medical information ?
                        </h4>
                        <div className="pt-10 pb-3">
                            <Button color="blue" onClick={()=> navigate("/connexion")} className="mx-5" variant="gradient"><span className="mx-2">Digital Medical Report</span> <EditNoteRounded /> </Button>
                            <Button color="indigo" onClick={()=> navigate("/lab")} variant="outlined"><span className="mx-2">Virtual Laboratory</span> <ChevronRightRounded /> </Button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}