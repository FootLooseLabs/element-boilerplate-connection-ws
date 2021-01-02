class AgentUI extends DOMComponent {
    static domElName = "agent-ui";

    static styleMarkup(rootEl) {
        return `<style type="text/css">

        </style>`
    }

    static markupFunc (_data, uid, uiVars, routeVars, _constructor) { 
        if (uiVars.connection != "authorised") {
            return `<div class="d-flex flex-column w100 justify-content-center align-items-center">
                <h3 class="m0 tx-xxl grey-text center">Interface is Inaccessible.</h3>
            </div>`;
        }
        return `<div class="row right m0 p0" style="z-index: 999;">
            <ul class="nav nav-tabs">
                <li class="p5 m10">
                    <a class="" href="#" onclick="_router.go('agent-x')">Constituent-Agent-X</a>
                </li>
                <li class="p5 m10">
                    <a class="" href="#" onclick="_router.go('agent-y')">Constituent-Agent-Y</a>
                </li>
                <li class="p5 m10">
                    <a class="" href="#" onclick="_router.go('agent-z')">Constituent-Agent-Z</a>
                </li>
            </ul>
        </div>

        <div class="row m0" style="position: relative; height: calc(100% - 80px);">

            <div class="surface" route="agent-x">
                <div class="col-12 d-flex flex-column align-items-center justify-content-center">
                     <h4 class="tx-xxl grey-text text-darken-3">AGENT: ROUTE X</h4>
                </div>
            </div>

            <div class="surface" route="agent-y">
                <div class="col-12 d-flex flex-column align-items-center justify-content-center">
                     <h4 class="tx-xxl grey-text text-darken-3">AGENT: ROUTE Y</h4>
                </div>
            </div>

            <div class="surface" route="agent-z">
                <div class="col-12 d-flex flex-column align-items-center justify-content-center">
                     <h4 class="tx-xxl grey-text text-darken-3">AGENT: ROUTE Z</h4>
                </div>
            </div>
        </div>`
    }

    constructor() {
        super();
        PostOffice.sockets.global.addListener("connection-opened",(msg)=>{
            PostOffice.sockets.hostConnection.sendMsg({lexemeName: "GetEnvInfo", msg: {} });
        });
    }

    postRender() {

    }

    onConnect() {
        PostOffice.sockets.hostConnection.addListener("connection-update", (_connection)=>{
            this.uiVars.connection = _connection.current_state;
            this.render();
        });

        setTimeout(()=>{
            PostOffice.publishToInterface("PreloaderInterface:::ToggleUI",{state: "hide"});
        }, 1000);
    }
}


AgentUI.compose = () => {

}

export { AgentUI };