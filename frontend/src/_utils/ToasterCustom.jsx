import toast from "react-hot-toast";

//les 2 fonctions info et warning de toasterCustum permet de faire des notifications en se basant sur toast
//on 'appele sur n'importe quelle page page pour faire notification ex : toasterCustum.info(mrsszge)
const toasterCustum = {
  warning: (message) => {
    toast(message, {
      duration: 6000,
      icon: "⚠️",
      style: {
        minWidth: "400px",
        fontSize: "18px",
        padding: "16px",
        background: "#FED7AA",
        color: "#854D12",
        borderRadius: "0",
      },
    });
  },

  info: (message) => {
    toast(message, {
      duration: 6000,
      icon: "ℹ️",
      style: {
        minWidth: "400px",
        fontSize: "18px",
        padding: "16px",
        background: "#BFDBFE",
        color: "#1E40BB",
        borderRadius: "0",
      },
    });
  },
};

export default toasterCustum;
