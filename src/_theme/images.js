module.exports = {
  name: "Theming Img Routes File",
  themeImages: {
    logo: {
      variant: {
        mobile: {
          src: "/Small_Logo.png",
          alt: "Orange SN",
          height: 35,
        },
        desktop: {
          src: "/orange_logo.svg",
          alt: "Orange SN",
          width: 50,
          height: 50,
        },
      },
    },
    menuBurger: {
      shop: {
        src: "/boutik.png",
        alt: "Eshop",
      },
      offres: {
        src: "/menuoffres.svg",
        alt: "Menu offres",
      },
      pass: {
        src: "/menupass.svg",
        alt: "Internet",
      },
      divers: {
        src: "/divertissement.svg",
        alt: "Orange et vous",
      },
    },
    assistant: {
      src: "/ibou.svg",
      alt: "ibou",
      boxSize: { base: "2rem", md: "3rem" },
      mt: { base: "0", md: "1rem" },
    },
    hero: {
      src: "/heroDesk.png",
      alt: "Hero",
    },
    payment: {
      om: {
        default: {
          src: "/om.svg",
          alt: "om",
        },
        noactive: {
          src: "/om.noactive.svg",
          alt: "om",
        },
      },
      cb: {
        default: {
          src: "/credit-card.png",
          alt: "cb",
          boxSize: "1.5rem",
        },
        noactive: {
          src: "/credit-card.noactive.png",
          alt: "cb",
          boxSize: "1.5rem",
        },
      },
    },
    drawer: {
      oem: {
        leftIcon: {
          src: "/orange-et-moi-black.svg",
          alt: "Orange Money",
          width: 30,
          height: 30,
        },
        rightIcon: {
          src: "/om-tap.svg",
          alt: "Orange Money",
          width: 30,
          height: 30,
        },
      },
      om: {
        leftIcon: {
          src: "/orange-money-black.svg",
          alt: "Orange Money",
          width: 30,
          height: 30,
        },
        rightIcon: {
          src: "/om-tap1.svg",
          alt: "Orange Money",
          width: 30,
          height: 30,
        },
      },
    },
    stepper: {
      eligibility: {
        active: "/workflows/images/eligibilityComplete.png",
        complete: "/workflows/images/eligibilityComplete.png",
        incomplete: "/workflows/images/eligibilityInComplete.png",
      },
      subscriptionAddressInfos: {
        active: "/workflows/images/subscribeComplete.png",
        complete: "/workflows/images/subscribeComplete.png",
        incomplete: "/workflows/images/subscribeIncomplete.png",
      },
      subscriptionInfos: {
        active: "/workflows/images/subscribeComplete.png",
        complete: "/workflows/images/subscribeComplete.png",
        incomplete: "/workflows/images/subscribeIncomplete.png",
      },
      payment: {
        active: "/workflows/images/paymentComplete.png",
        complete: "/workflows/images/paymentComplete.png",
        incomplete: "/workflows/images/paymentIncomplete.png",
      },
      notification: {
        active: "/workflows/images/notificationComplete.png",
        complete: "/workflows/images/notificationComplete.png",
        incomplete: "/workflows/images/notificationIncomplete.png",
      },
      sub: {
        incomplete: "/workflows/images/subStepIncomplete.svg",
        active: "/workflows/images/subStepActive.png",
        complete: "/workflows/images/subStepComplete.png",
      },
    },
    fieldStudy: {
      successInfo: "/d-co-interior.png",
    },
    map: {
      marker: "/marker.svg",
    },
    eligibility: {
      info: "/info.svg",
    },
  },
};
