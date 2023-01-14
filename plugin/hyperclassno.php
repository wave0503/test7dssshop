<?php

/**
* HYPER STUDIO API TrueWallet Gift Class
 *
 * @package   api-truewallet-gift-class
 * @author    Hyper Studio <https://www.facebook.com/pagehyperstudio>
 * @copyright Copyright (c) 2020-2021
 * @link      https://github.com/sharpaddroot/api-truewallet-gift-class
 * @version   1.0.1 (Beta)
 *
**/

class Hyper{

    public $license = 'niqlR12jy_gLp5qdmu9CKlk761fLbWJlcYcPGYuSxEk';
    public $phone = '0806746881'; //นำ เบอร์โทรศัพท์ มาใส่ที่นี่

    public $startpoint = 'http://hypergift.tk/plugin/hyperclassnolimit.php';
    function hyperRequest($giftlink){

        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => $this->startpoint.'?lic='.$this->license.'&l='.$giftlink.'&p='.$this->phone,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
        CURLOPT_HTTPHEADER => array('Content-Type: application/json',),
        ));

        $this->response = curl_exec($curl);

        curl_close($curl);
        $this->data = json_decode($this->response, true);
        return $this->data;
    }

}

?>