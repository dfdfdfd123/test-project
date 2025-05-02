package bitc.fullstack503.server.service;
import bitc.fullstack503.server.mapper.HQMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HQServiceImpl implements HQService {

    @Autowired
    private HQMapper hqMapper;
}
