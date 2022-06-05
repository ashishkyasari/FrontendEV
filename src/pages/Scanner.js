import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import Layout from '../components/Layout';

const Scanner = () => {
    const [data, setData] = useState('No result');

    return (
        <Layout>
            <div id='qr-reader-container'>
                <div id='qr-reader'>
                    <QrReader
                        onResult={(result, error) => {
                            if (!!result) {
                                setData(result?.text);
                            }

                            if (!!error) {
                                console.info(error);
                            }
                        }}
                    />
                </div>
                {(data !== 'No result') ? (<button id='open-door-button'>Open Door</button>) : (<></>)}
            </div>
        </Layout>
    );
};

export default Scanner;