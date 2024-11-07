import axios from "axios";
import { Col, Container, Form, Row, Button, Table, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Hosts, Headers, AccessToken } from "../constants/config";
import successimage from '../images/success.png';

const AcctAndTxns = () => {
    const [fetchData, setFetchData] = useState(false);
    const [amount, setAmount] = useState('');
    const [merchantId, setMerchantId] = useState('');
    const [paymentInfo, setPaymentInfo] = useState({});
    const [showSuccessImage, setShowSuccessImage] = useState(false);

    const MI_PAY_HOST = Hosts.miPaymentHost;
    const APIM_PAY_HOST = Hosts.apimPaymentHost;

    useEffect(() => {
        if (fetchData === false) {
            return;
        }
        let payload = {
            "transactionId": "TXN12345",
            "customerId": "CUST67890",
            "transactionDate": "2024-10-10",
            "amount": amount,
            "currency": "USD",
            "status": "Completed",
            "paymentMethods": [
                {
                "type": "CreditCard",
                "provider": "Visa",
                "last4Digits": "1234"
                },
                {
                "type": "PayPal",
                "provider": "PayPal",
                "accountEmail": "customer@example.com"
                }
            ],
            "merchant": {
                "merchantId": merchantId,
                "merchantName": "SuperStore"
            }
        }
        axios.post(APIM_PAY_HOST, payload, Headers).then(responseData => {
            setPaymentInfo(responseData.data);
            setShowSuccessImage(true);
        }).catch(error => {
            if (error.response.status === 429 || error.response.status === 403 || error.response.status === 401) {
                setPaymentInfo({ERROR: error.response.data});
                setShowSuccessImage(false);
            }
        });
        setFetchData(false);
    }, [fetchData]);

    return (
        <Container>
        <Row>
            <Col>
                <Container className="mt-5">
                    <Row>
                        <h1>Personal Financial Data</h1>
                        <Alert variant="success">Data sent for <b>Merchant_ID={merchantId}</b> at <i>Time={new Date().toLocaleTimeString()}</i></Alert>
                    </Row>
                    <Row className="mt-2 gy-2">
                        <Col md="4">Merchant Id : </Col>
                        <Col md="5"><Form.Control size="sm" type="text" required placeholder="Enter merchant Id"
                            value={merchantId} onChange={event => setMerchantId(event.target.value)} /></Col>

                        <Col md="4">Amount (USD) : </Col>
                        <Col md="5"><Form.Control size="sm" type="number" required placeholder="Enter amount"
                            value={amount} onChange={event => setAmount(event.target.value)} /></Col>
                    </Row>
                    <Row className="mt-2" >
                        <Col md="4" />
                        <Col md="3" className="d-flex flex-row-reverse" >
                            <Button variant="dark" onClick={e => setFetchData(true)}>Submit Data</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Container className="mt-5">
                            <Row>
                                <h1>Account Info</h1>
                            </Row>
                            <Row>
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Data</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={1}>
                                            <td>{1}</td>
                                            <td>
                                                <pre>{JSON.stringify(paymentInfo, null, 4)}</pre>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Row>
                            {showSuccessImage && (
                                <Row className="mt-3">
                                    <Col className="text-center">
                                        <img src={successimage} alt="Success" style={{ width: '125px', height: '125px' }} />
                                    </Col>
                                </Row>
                            )}
                        </Container>
                    </Row>
                </Container>
            </Col>
        </Row>
        </Container>
    );
};

export default AcctAndTxns;