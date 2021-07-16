import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Layout from "./hoc/Layout/Layout";
import { primaryColor, secondaryColor } from "./constants/Colors";

const ApplyPassport = lazy(() =>
    import("./containers/ApplyPassport/ApplyPassport")
);
const Procedure = lazy(() => import("./containers/Procedure/Procedure"));
const ModifyApplication = lazy(() =>
    import("./containers/ModifyApplication/ModifyApplication")
);
const RequiredDocs = lazy(() =>
    import("./containers/RequiredDocs/RequiredDocs")
);
const Faqs = lazy(() => import("./containers/Faqs/Faqs"));
const Fees = lazy(() => import("./containers/Fees/Fees"));
const Track = lazy(() => import("./containers/Track/Track"));
const PrivacyPolicy = lazy(() =>
    import("./containers/PrivacyPolicy/PrivacyPolicy")
);
const RefundPolicy = lazy(() =>
    import("./containers/RefundPolicy/RefundPolicy")
);
const Terms = lazy(() => import("./containers/Terms/Terms"));
const PreviewPay = lazy(() => import("./containers/PreviewPay/PreviewPay"));
const EditPassportDetails = lazy(() =>
    import("./containers/EditPassportDetails/EditPassportDetails")
);

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            "Montserrat","Helvetica Neue","Arial","sans-serif"
        ]
    },
    palette: {
        primary: {
            main: primaryColor
        },
        secondary: {
            main: secondaryColor
        }
    }
});

const Loder = () => (
    <Box
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px"
        }}
    >
        <CircularProgress />
    </Box>
);

export default class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Router basename="/app">
                    <Layout>
                        <Paper style={{ padding: "20px" }} elevation={0}>
                            <Suspense fallback={<Loder />}>
                                <Switch>
                                    <Route
                                        path="/preview"
                                        component={PreviewPay}
                                    />
                                    <Route
                                        path="/procedure"
                                        component={Procedure}
                                    />
                                    <Route
                                        path="/modify_application"
                                        component={ModifyApplication}
                                    />
                                    <Route
                                        path="/edit"
                                        component={EditPassportDetails}
                                    />
                                    <Route
                                        path="/documents"
                                        component={RequiredDocs}
                                    />
                                    <Route path="/faqs" component={Faqs} />
                                    <Route path="/fees" component={Fees} />
                                    <Route path="/track" component={Track} />
                                    <Route
                                        path="/privacy-policy"
                                        component={PrivacyPolicy}
                                    />
                                    <Route
                                        path="/refund-policy"
                                        component={RefundPolicy}
                                    />
                                    <Route path="/terms" component={Terms} />
                                    <Route path="/" component={ApplyPassport} />
                                </Switch>
                            </Suspense>
                        </Paper>
                    </Layout>
                </Router>
            </ThemeProvider>
        );
    }
}

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
