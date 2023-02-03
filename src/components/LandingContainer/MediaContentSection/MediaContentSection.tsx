import React from "react";
import Image from "next/image";
// import { NextPage } from "next";
import img1 from "../../../../public/images/media1.png";
import img2 from "../../../../public/images/media2.png";
import ExplanationBox from "@/components/ExplanationBox/ExplanationBox";
import { Dialog } from "@mui/material";
import ReactPlayer from "react-player";
// import skiingVideo from "../../../public/videos/Water-skiing.mp4";

const MediaContentSection: React.FC = (): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="w-100 mx-auto position-relative">
      <Image
        src={img1}
        alt="MEDIAIMAGE1"
        style={{ position: "relative", left: "0" }}
      />
      <ExplanationBox
        className="ml-128 mt-2"
        isReadMore
        description="By better understanding the various aspects of surfing, you will improve faster and have more fun in the water."
      />
      <Image
        style={{ position: "absolute", right: "5.8rem" }}
        className="cursor-pointer mt-3"
        src={img2}
        alt="MEDIAIMAGE2"
        onClick={handleClickOpen}
      />
      {/* MUI Dialog for Opening Video */}
      <Dialog onClose={handleClose} open={open}>
        <div className="">
          <ReactPlayer
            width="500px"
            url={"https://www.youtube.com/watch?v=0YjJhn2UkEk"}
          />
        </div>
      </Dialog>
    </section>
  );
};

export default MediaContentSection;
