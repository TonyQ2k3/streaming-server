import React, { useEffect } from 'react';
import XMLViewer from 'react-xml-viewer';

function Stat() {
    let xml = `
    <?xml version="1.0" encoding="utf-8" ?>
    <?xml-stylesheet type="text/xsl" href="stat.xsl" ?>
    <rtmp>
    <nginx_version>1.18.0</nginx_version>
    <nginx_rtmp_version>1.1.4</nginx_rtmp_version>
    <compiler>gcc 11.4.0 (Ubuntu 11.4.0-1ubuntu1~22.04) </compiler>
    <built>Apr 22 2024 15:40:08</built>
    <pid>33086</pid>
    <uptime>7</uptime>
    <naccepted>3</naccepted>
    <bw_in>0</bw_in>
    <bytes_in>329403</bytes_in>
    <bw_out>0</bw_out>
    <bytes_out>192139</bytes_out>
    <server>
    <application>
    <name>vod</name>
    <play>
    <nclients>0</nclients>
    </play>
    </application>
    <application>
    <name>live</name>
    <live>
    <nclients>0</nclients>
    </live>
    </application>
    <application>
    <name>hls</name>
    <live>
    <nclients>0</nclients>
    </live>
    </application>
    </server>
    </rtmp>
    `;
    useEffect(() => {
        try {
            fetch('/api/stat/stat.xsl')
            .then((response) => {console.log(response.text)})
            .then((data) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'application/xml');
                console.log(doc);
            })
        } catch (err) {
            console.log(err);
        }
    }, []);
    return (
        <div>
            <XMLViewer xml={xml} />
        </div>
    )
}

export default Stat