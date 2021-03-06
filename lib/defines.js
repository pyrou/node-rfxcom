module.exports = {
    INTERFACE_CONTROL: 0,
    INTERFACE_MESSAGE: 1,
    TRANSCEIVER_MESSAGE: 2,
    ELEC2: 0x5a,
    LIGHTING1: 0x10,
    LIGHTING2: 0x11,
    LIGHTING3: 0x12,
    LIGHTING4: 0x13,
    LIGHTING5: 0x14,
    LIGHTING6: 0x15,
    CURTAIN1: 0x18,
    RFY: 0x1A,
    SECURITY1: 0x20,
    CURTAIN_OPEN: 0x00,
    CURTAIN_CLOSE: 0x01,
    CURTAIN_STOP: 0x02,
    CURTAIN_PROGRAM: 0x03,

    RfyCommands: {
        stop: 0x00,
        up: 0x01,
        upstop: 0x02,
        down: 0x03,
        downstop: 0x04,
        updown: 0x05,
        listremotes: 0x06,
        program: 0x07,
        program2sec: 0x08,
        program7sec: 0x09,
        stop2sec: 0x0A,
        stop5sec: 0x0B,
        updown5sec: 0x0C,
        erasethis: 0x0D,
        eraseall: 0x0E,
        up05sec: 0x0F,
        down05sec: 0x10,
        up2sec: 0x11,
        down2sec: 0x12,
        sunwindenable: 0x13,
        sundisable: 0x14
    }
};
