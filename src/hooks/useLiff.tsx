import liff from '@line/liff/dist/lib'
import React, { useEffect, useState } from 'react'

// dataの型定義
interface LiffError {
    code: string
    message: string
}

interface LiffId{
    liffId: string
}

function useLiff({ liffId } : LiffId) {
    const [idToken, setIdToken] = useState<string | null>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<LiffError | null>(null);

    const initLiff = async ({ liffId } : LiffId) => {
        setLoading(true);
        try {
            // LIFF APIのinitを呼び出して初期化
            liff.init({ liffId })
                .then(() => {
                    if(liff.isInClient()){
                        liff.login({
                            redirectUri: ""
                        })
                        const token = liff.getIDToken();
                        setIdToken(token)
                    }
                });
        } catch (error: LiffError | any) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    // useLiffが呼ばれたらinitialize処理を実行する
    useEffect(() => {
        initLiff({ liffId });
    }, [liffId]);

    return { loading, error, idToken };
}

export default useLiff;
