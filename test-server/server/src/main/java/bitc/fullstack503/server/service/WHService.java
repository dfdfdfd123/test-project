package bitc.fullstack503.server.service;

import bitc.fullstack503.server.dto.WHDTO;

import java.util.List;

public interface WHService {
    //    물류센터 재고조회
//    List<WHDTO> selectWHStock();
    //    물류센터 입고 조회
//    List<WHDTO> selectWHComeIn();

    List<WHDTO> selectWHStock(String warehouseId);
    List<WHDTO> selectWHComeIn(String warehouseId);


    List<WHDTO> selectWHManage(String userId);


    public void updateOrderStatus(int orderItemId, String orderItemStatus);

}
