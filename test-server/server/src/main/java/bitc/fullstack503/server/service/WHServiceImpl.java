package bitc.fullstack503.server.service;

import bitc.fullstack503.server.dto.WHDTO;
import bitc.fullstack503.server.mapper.WHMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WHServiceImpl implements WHService {

    @Autowired
    private WHMapper whMapper;

    //    물류센터 재고조회
//    @Override
//    public List<WHDTO> selectWHStock() {
//        return whMapper.selectWHStock();
//    }

    //    물류센터 입고조회
//    @Override
//    public List<WHDTO> selectWHComeIn() {
//        return whMapper.selectWHComeIn();
//    }



    @Override
    public List<WHDTO> selectWHStock(String warehouseId) {
        return whMapper.selectWHStock(warehouseId);
    }

    @Override
    public List<WHDTO> selectWHComeIn(String warehouseId) {
        return whMapper.selectWHComeIn(warehouseId);
    }

    //    재고관리 조회
    @Override
    public List<WHDTO> selectWHManage(String userId) {
        return whMapper.selectWHManage(userId);
    }

    @Override
    public void updateOrderStatus(int orderItemId, String orderItemStatus) {
        whMapper.updateOrderStatus(orderItemId, orderItemStatus);
    }


}